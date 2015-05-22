module.exports = function(grunt) {

  grunt.config.init({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.config('eslint', {
    dist: {
      options: {
        configFile: '.eslintrc',
      },
      src: ['abbr-touch.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.config('jasmine', {
    test: {
      src: 'abbr-touch.js',
      options: {
        specs: 'test/*-spec.js'
      }
    }
  });

  grunt.registerTask('default', [
    'eslint',
    'jasmine'
  ]);
};
