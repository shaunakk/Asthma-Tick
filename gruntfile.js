module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    min: {
        dist: {
            src: "www/js/*.js",
            dest: "app.min.js"
        }
    }
  });



  grunt.loadNpmTasks('grunt-contrib-uglify');
};