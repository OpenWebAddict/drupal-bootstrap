module.exports = function(grunt) {

    grunt.initConfig({

        // Task configuration
        less: {
            development: {
                options: {
                    compress: true,
                },
                files: {
                    "./css/front.css":"./assets/less/base.less"
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            js: {
                src: [
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './assets/js/script.js'
                ],
                dest: './js/front.js',
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    './js/front.js': './js/front.js',
                }
            }
        },
        watch: {
            js: {
                files: [
                    './assets/js/*.js'
                ],
                tasks: ['concat:js','uglify:js'],
                options: {
                    livereload: true
                }
            },
            less: {
                files: ['./assets/less/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task definition
    grunt.registerTask('default', ['less', 'concat', 'uglify']);

};