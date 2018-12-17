const gulp = require("gulp");
var browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
var clean = require("gulp-clean");
const htmlmin = require("gulp-htmlmin");

// Watch & Serve
gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./src"
  });

  gulp.watch(["src/scss/*.scss", "src/scss/**/*.scss"], ["sass"]);
  gulp.watch(["src/*.html", "src/js/*.js"]).on("change", browserSync.reload);
});

// Compile SCSS
gulp.task("sass", function() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.stream());
});

// build tasks

gulp.task("build:html", function() {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

gulp.task("build:css", function() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build/css"));
});

gulp.task("build:js", function() {
  return gulp
    .src("src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task("build:imagemin", function() {
  return gulp
    .src("src/assets/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/assets"));
});

gulp.task("build:clean", function() {
  return gulp.src("./build").pipe(clean());
});

gulp.task("default", ["serve", "sass"]);
gulp.task("build", [
  "build:clean",
  "build:html",
  "build:css",
  "build:js",
  "build:imagemin"
]);
