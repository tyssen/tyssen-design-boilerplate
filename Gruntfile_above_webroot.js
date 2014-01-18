module.exports = function(grunt){

	"use strict";
   require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			css: {
				files: ['public_html/assets/sass/**/*.scss'],
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
				files: ['public_html/index.html'],
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
				// files: ['public_html/assets/js/site.js'],
				// tasks: ['uglify']
				files: ['public_html/assets/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			livereload: {
				options: { livereload: true },
				files: [
					'public_html/index.html',
					'public_html/assets/css/*.css',
					'public_html/assets/js/*.js'
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
				src: ['public_html/index.html']
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
					'public_html/assets/js/site.min.js': ['public_html/assets/js/site.js']
				}
			}
		}

	});

	grunt.registerTask('default',['compass','watch']);
};