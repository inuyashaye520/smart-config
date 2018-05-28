var gulp = require('gulp');
var replace = require('gulp-replace');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var merge = require('merge2');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var version = require('gulp-version-number');
var connect = require('gulp-connect');

var pwd = __dirname;
var assets = 'src/main/assets';
var assetsDest = 'target/classes/static/assets';

gulp.task('pug', function () {
    var pugs = gulp.src(assets + '/pug/**/*.pug')
        .pipe(pug({basedir: pwd, pretty: true}))
        .pipe(version({replaces: [/#{VERSION}#/g]}))
        //.pipe(rename({extname: '.ftl'}))
        .pipe(gulp.dest('target/classes/templates'));

    var tmpls = gulp.src([assets + '/module/**/*.pug'])
        .pipe(pug({basedir: pwd, pretty: true}))
        .pipe(version({replaces: [/#{VERSION}#/g]}))
        //.pipe(rename({extname: '.ftl'}))
        .pipe(gulp.dest('target/classes/templates/tmpl'));

    return merge(pugs, tmpls);
});

gulp.task('js', function () {
    var dest = assetsDest + '/js';
    var indexJs = gulp.src([assets + '/module/common/**/*.module.js',
        assets + '/module/**/*.module.js',
        assets + '/module/common/**/*.js',
        assets + '/module/**/*.js'
    ])
        .pipe(concat('index.js'))
        .pipe(gulp.dest(dest))
        .pipe(rename('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest));

    return merge(indexJs);
});

gulp.task('css', function () {
    var expanded = gulp.src(assets + '/scss/**/*.scss')
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(gulp.dest(assetsDest + '/css'));

    var compressed = gulp.src(assets + '/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest(assetsDest + '/css'));
    return merge(expanded, compressed);
});

gulp.task('copy', function () {
    var img = gulp.src(assets + '/images/**/*')
        .pipe(gulp.dest(assetsDest + '/images'));

    var js = gulp.src(assets + '/js/**/*')
        .pipe(gulp.dest(assetsDest + '/js'));

    var lib = gulp.src(assets + '/lib/**/*')
        .pipe(gulp.dest(assetsDest + '/lib'));

    return merge(img, js, lib);
});

gulp.task('watch', function () {
    gulp.watch([assets + '/*pug/**/*.pug'], ['pug']);
    gulp.watch([assets + '/scss/**/*.scss'], ['css']);
});

gulp.task('connect', function () {
    connect.server({root: 'target/classes/static', port: 8888, livereload: false});
});

gulp.task('build', ['pug', 'css', 'copy']);
gulp.task('default', ['build', 'watch']);
