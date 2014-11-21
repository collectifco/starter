module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    includePaths: require('node-neat').includePaths
                },
                files: {
                    'assets/style.css': 'assets/scss/style.scss'
                }
            } 
        },
        watch: {
          scripts: {
            files: ['_assets/scss/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
            },
          },

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
//    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass','watch']);

};