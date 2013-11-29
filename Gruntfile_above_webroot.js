module.exports = function(grunt){

	"use strict";
   require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			html: {
				files: ['public_html/index.html'],
				tasks: ['htmlhint']
			},
			js: {
				files: ['public_html/assets/js/site.js'],
				tasks: ['uglify']
			},
			css: {
				files: ['public_html/assets/sass/**/*.scss'],
				tasks: ['compass:dist']
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