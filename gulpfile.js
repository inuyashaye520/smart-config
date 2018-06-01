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
        .pipe(rename({extname: '.ftl'}))
        .pipe(gulp.dest('target/classes/templates'));

    var tmpls = gulp.src([assets + '/module/**/*.pug'])
        .pipe(pug({basedir: pwd, pretty: true}))
        .pipe(version({replaces: [/#{VERSION}#/g]}))
        .pipe(rename({extname: '.ftl'}))
        .pipe(gulp.dest('target/classes/templates/tmpl'));

    return merge(pugs, tmpls);
});

gulp.task('js', function () {
    var dest = assetsDest + '/js';

    var userJs = gulp.src([assets + '/module/common/**/*.module.js',
        assets + '/module/user/**/*.module.js',
        assets + '/module/common/**/*.js',
        assets + '/module/user/**/*.js'
    ])
        .pipe(concat('user.js'))
        .pipe(gulp.dest(dest))
        .pipe(rename('user.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest));

    return merge(userJs);
});

gulp.task('css', function () {
    var expanded = gulp.src(assets + '/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest(assetsDest + '/css'))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(assetsDest + '/css'));

    var compressed = gulp.src(assets + '/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest(assetsDest + '/css'))
        .pipe(concat('app.min.css'))
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
    gulp.watch([assets + '/*pug/**/*.pug', assets + '/*module/**/*.pug'], ['pug']);
    gulp.watch([assets + '/scss/**/*.scss'], ['css']);
    gulp.watch([assets + '/module/**/*.js'], ['js']);
});

gulp.task('connect', function () {
    connect.server({root: 'target/classes/static', port: 8888, livereload: false});
});


gulp.task('build', ['pug', 'css', 'js', 'copy']);
gulp.task('default', ['build', 'watch']);
