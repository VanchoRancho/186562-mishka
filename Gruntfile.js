"use strict";

module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-postcss");

  grunt.initConfig({
    postcss: {
      style: {
        options: {
          processors: [
            require("precss")(),
            require("autoprefixer")({browsers: [
              "last 2 versions"
            ]})
          ]
        },
        src: "postcss/style.css",
        dest: "css/style.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      style: {
        files: ["postcss/**/*.css"],
        tasks: ["postcss"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
};
