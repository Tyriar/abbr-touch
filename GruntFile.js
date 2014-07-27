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

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.config('jasmine', {
    test: {
      src: 'dist/abbr-touch.js',
      options: {
        specs: 'test/*-spec.js'
      }
    }
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
        ]
      }
    }
  });

  grunt.registerTask('dist', [
    'clean:dist',
    'copy:dist',
    'uglify:dist'
  ]);

  grunt.registerTask('test', [
    'jasmine:test',
  ]);

  grunt.registerTask('default', [
    'dist',
    'test'
  ]);
};
