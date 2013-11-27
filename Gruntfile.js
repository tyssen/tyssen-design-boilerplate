module.exports = function(grunt){

	"use strict";
   require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			html: {
				files: ['index.html'],
				tasks: ['htmlhint']
			},
			js: {
				files: ['assets/js/site.js'],
				tasks: ['uglify']
			},
			css: {
				files: ['assets/sass/**/*.scss'],
				tasks: ['compass:dist']
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