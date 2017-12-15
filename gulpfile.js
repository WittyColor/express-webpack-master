var gulp = require('gulp');
//加载gulp-load-plugins插件，并立即执行它
var plugins = require('gulp-load-plugins')();

var srcPaths = {
  sass:'./client/sass/**/*.scss',
  js:'./client/js/**/*.js',
  bundledJS:'./public/js/**/*.js',
  minifyCss:'./public/css/**/*.css'
};

//压缩js文件
gulp.task('minify-js',function(){
  gulp.src(srcPaths.js)
    .pipe(plugins.uglify())
    .pipe(gulp.dest('public/js'));
});

//编译sass
gulp.task('sass',function(){
  return gulp.src(srcPaths.sass)
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('public/css'));
});

//css文件压缩
gulp.task('cssmin',function(){
  gulp.src(srcPaths.minifyCss)
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('public/css'));
});

//自动刷新当前界面
gulp.task('watch',function () {
  gulp.watch(srcPaths.sass,['sass']);
  gulp.watch(srcPaths.js,['minify-js']);
  gulp.watch(srcPaths.minifyCss,['cssmin']);
})

gulp.task('default',['sass','minify-js','cssmin'],function(){
  console.log(plugins);
  console.log('这是gulp 任务');
});

