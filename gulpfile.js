var elixir = require('laravel-elixir');
//var elixirTypescript = require('elixir-typescript');

var gulp = require('gulp');
var strip = require('gulp-strip-comments');
var ts = require('gulp-typescript');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

elixir.config.production = true;


gulp.task('typescript-site', function () {
     gulp.src(['resources/assets/typescript/**/*.ts','!resources/assets/typescript/ice/*.ts'])
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(ts({
            target: "ES5",
            declaration: false,
            removeComments: false,
            noImplicitAny: true,
            out: 'site.js'
        }))
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(gulp.dest('web/view/assets/js'))
        .pipe(notify('typescript-site completed!'));

    gulp.src('resources/assets/typescript/ice/*.ts')
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(ts({
            target: "ES5",
            declaration: false,
            removeComments: true,
            noImplicitAny: true,
            suppressImplicitAnyIndexErrors: true
            //out: 'ice.js'
        }))
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(gulp.dest('web/view/assets/js'))
        .pipe(notify('typescript-ice completed!'));
});

//gulp.task('default', ['prepare', 'bootstrap-scss', 'site-scss', 'auth-scss', 'typescript']);
elixir(function (mix) {
    var bootstrapPath = 'node_modules/bootstrap-sass/assets';
    mix.copy(bootstrapPath + '/fonts', 'web/view/assets/bootstrap/fonts').copy(bootstrapPath + '/javascripts/bootstrap.min.js', 'web/view/assets/bootstrap/js');
    mix.sass('site.scss', 'web/view/assets/css/site.css');
    mix.sass('bootstrap.scss', 'web/view/assets/bootstrap/css/bootstrap.css');
    mix.task('typescript-site', 'resources/assets/typescript/**/*.ts');
});
