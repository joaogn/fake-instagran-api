var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');


var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function(){
    return gulp.src('dist',{ allowEmpty: true }).pipe(clean());
});


gulp.task('compile', function(){

    return tsProject.src()
                    .pipe(tsProject())
                    .js.pipe(gulp.dest('dist'));

});


gulp.task('copy-opts', function(){

    return gulp.src('src/config/test/mocha.opts')
                .pipe(gulp.dest('dist/src/config/test'));


});

gulp.task('copy-migration-config', function(){

    return gulp.src('src/config/config.json',{ allowEmpty: true })
                .pipe(gulp.dest('dist/src/config'));
});

gulp.task('build', function(){

    return gulp.src('src/migrations/*',{ allowEmpty: true })
                .pipe(gulp.dest('dist/src/migrations'));

});



gulp.task('default', gulp.series('clean','compile','copy-opts','copy-migration-config','build'));