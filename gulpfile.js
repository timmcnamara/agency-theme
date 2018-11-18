const gulp = require('gulp');
var browserSync = require('browser-sync').create(); 
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const ufligy = require('gulp-uglify');


// Watch & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './src'
    });

    gulp.watch(['src/scss/*.scss', 'src/scss/**/*.scss'], ['sass']);    
    gulp.watch(['src/*.html', 'src/js/*.js']).on('change', browserSync.reload);
});

// Compile SCSS
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())    
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'sass'])
