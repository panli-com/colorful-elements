var gulp = require('gulp');
var react = require('gulp-react');

// 引入组件
var sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    browserSync = require('browser-sync').create(),
    notify = require('gulp-notify'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    port = process.env.port || 5000;


/* 浏览器同步  */
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// live reload
gulp.task('connect',function(){
    connect.server({
        // root:'./',
        port: port,
        livereload: true,
    })
});


//编译Sass，Autoprefix及缩小化
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe( connect.reload() )
        .pipe(notify({ message: 'Styles  task complete' }));

});

gulp.task('html',function(){
    gulp.src('./*.html')
        .pipe( connect.reload() )
});

gulp.task('panC',function(){
    return gulp.src('./src/js/pan.js')
        .pipe(concat('pan.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
        .pipe( connect.reload() )
        .pipe(notify({ message: 'Scripts task complete' }));

});

/* 监听 文件变化  */

gulp.task('watch', function() {

    // 看守.scss 档
    gulp.watch('./src/scss/*.scss', ['sass']);

    // 看守所有.js档
    gulp.watch('./src/**/js/*.js', ['js']);

    // 看守所有.html
    gulp.watch('./*.html',['html']);

});

gulp.task('serve',['connect','watch']);