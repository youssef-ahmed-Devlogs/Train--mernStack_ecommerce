const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

// Watch sass file and compile to css in css folder
gulp.task("sass", async () => {
  gulp.watch("src/*.scss", async () => {
    gulp.src("src/*.scss").pipe(sass()).pipe(gulp.dest("src/css"));
  });
});
