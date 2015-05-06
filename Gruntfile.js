module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      app: {
        options: {
          debug: true,
          extension: 'js'
        },
        files: {
          'out/scripts/seti.js': 'src/js/**/*.js'
        }
      }
    },
    less: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'out/styles/seti.css': 'src/styles/seti.less'
        }
      }
    },
    watch: {
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['browserify'],
        options: {
          // Start a live reload server on the default port 35729
          livereload: true
        }
        },
      less: {
        files: ['src/styles/**/*.less'],
        tasks: ['less'],
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'out',
          keepalive: true
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('build', ['browserify', 'less']);
  grunt.registerTask('default', ['browserify', 'less']);
};
