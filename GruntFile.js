module.exports = function(grunt) {

  grunt.config.init({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.config('clean', {
    dist: 'dist'
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.config('copy', {
    dist: {
      files: {
        'dist/abbr-touch.js': 'abbr-touch.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.config('concat', {
    dist: {
      src: [
        'bower_components/touchtap-event.js/dist/touchtap-event.js',
        'abbr-touch.js'
      ],
      dest: 'dist/abbr-touch-with-event.js',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.config('uglify', {
    options: {
      preserveComments: 'some'
    },
    dist: {
      files: {
        'dist/abbr-touch.min.js': [
          'abbr-touch.js'
        ],
        'dist/abbr-touch-with-event.min.js': [
          'bower_components/touchtap-event.js/dist/touchtap-event.min.js',
          'abbr-touch.js'
        ]
      }
    }
  });

  grunt.registerTask('dist', [
    'clean:dist',
    'copy:dist',
    'concat:dist',
    'uglify:dist'
  ]);

  grunt.registerTask('default', [
    'dist'
  ]);
};
