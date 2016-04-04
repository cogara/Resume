var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', function() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('imgs', function() {
    return gulp.src('src/imgs/*.jpg')
        .pipe(gulp.dest('./dist/imgs'));
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('src/*.jpg',['imgs']);
    gulp.watch("./**/*.css").on('change', browserSync.reload);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});



gulp.task('default', ['sass', 'scripts', 'html', 'imgs','watch']);
