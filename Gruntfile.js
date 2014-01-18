module.exports = function(grunt){

	"use strict";
   require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			css: {
				files: ['assets/sass/**/*.scss'],
				tasks: ['compass:dist']
			},
			cmq: {
				options: {
					log: false
				},
				your_target: {
					files: {
						'assets/build/css/': ['assets/css/*.css']
					}
				}
			},
			html: {
				files: ['index.html'],
				tasks: ['htmlhint']
			},
			img: {
				files: ['**/*.{png,jpg,gif}'],
				tasks: ['imagemin','imageoptim'],
				options: {
					spawn: false,
				}
			},
			js: {
				// files: ['assets/js/site.js'],
				// tasks: ['uglify']
				files: ['assets/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			livereload: {
				options: { livereload: true },
				files: [
					'index.html',
					'assets/css/*.css',
					'assets/js/*.js'
				],
			}
		},


		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},

		concat: {
			dist: {
				src: [
					'js/*.js', // All JS in the libs folder
					'js/site.js'  // This specific file
				],
				dest: 'js/production.js',
			}
		},

		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'spec-char-escape': true,
					'id-unique': true
				},
				src: ['index.html']
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'assets/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'assets/img/'
				}]
			}
		},

		imageoptim: {
			myTask: {
				src: ['assets/img']
			}
		},

		uglify: {
			build: {
				files: {
					'assets/js/site.min.js': ['assets/js/site.js']
				}
			}
		}

	});

	grunt.registerTask('default',['compass','watch']);
};