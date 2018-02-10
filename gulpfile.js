'use strict';

var gulp = require('gulp');
var mergeStream = require('merge-stream');
var uglify = require('gulp-uglify');
// requires browserify and vinyl-source-stream
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var appFolders = [
    'app/js'
];

// TODO: Use uglify and watchify to speed up browserify task and shrink bundle size
// Bundles and builds js files
gulp.task('js', function() {

    var tasks = appFolders.map(function (folder) {

        // add custom browserify options here
        var b = browserify({
            entries: [folder + '/main.js'],
            debug: true
        });

        return b.bundle()
            .pipe(source('bundle.js'))
            // buffer file contents
            // .pipe(buffer())
            // include sourcemaps
            // .pipe(sourcemaps.init({ loadMaps: true }))
            // minify files with UglifyJS
            // .pipe(uglify({
            //     mangle: false
            // }))
            // log errors if they happen
            .on('error', function (err) {

                this.emit('end');
            })
            // writes .map file
            // .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('app/js/bundle'));
    });

    return mergeStream(tasks);
});

var jsToWatch = ['!app/js/test/*.js', 'app/js/*.js', 'app/js/controllers/*.js'];

gulp.task('watch', function() {
    gulp.watch(jsToWatch, ['js']);
});

gulp.task('build', ['js']);

gulp.task('heroku:', ['build']);

gulp.task('default', ['watch', 'js']);
