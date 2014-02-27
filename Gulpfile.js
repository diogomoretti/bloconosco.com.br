// Load Gulp and your plugins
var gulp       = require('gulp');
var connect    = require('gulp-connect');
var stylus     = require('gulp-stylus');
var plumber    = require('gulp-plumber');

// Define paths
var paths = {
    html  : '*.html',
    css   : 'stylus/**/*',
    js    : 'assets/js/**/*.js'
};

// Connect task
gulp.task('connect', connect.server({
    root: [__dirname + '/'],
    port: 8002,
    livereload: true,
    open: {
        browser: 'chrome'
    }
}));

// HTML task
gulp.task('html', function () {
    gulp.src(paths.html)
        .pipe(connect.reload());
});

// JS task
gulp.task('js', function () {
    gulp.src('assets/js/*.js')
        .pipe(connect.reload());
});

// Stylus task
gulp.task('stylus', function () {
    gulp.src('stylus/*.styl')
        .pipe(plumber())
        .pipe(stylus({
            use: ['nib'],
            set: ['compress']
        }))
        .pipe(gulp.dest('assets/css'))
        .pipe(connect.reload());
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(paths.css, ['stylus']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.js, ['js']);
});

// Server task
gulp.task('server', ['connect', 'watch']);