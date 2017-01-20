var gulp = require("gulp"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	sass = require("gulp-sass"),
	cleancss = require("gulp-clean-css");

gulp.task("devjs", function () {
	gulp.src(["src/js/*.js", "node_modules/bootstrap-sass/assets/javascripts/bootstrap.js"])
	.pipe(concat("main.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("dist/js/"));
});

gulp.task("devcss", function(){
	gulp.src(["src/css/*.css", "src/sass/*.scss","node_modules/bootstrap-sass/assets/stylesheets/*.scss"])
	.pipe(sass())
	.pipe(concat("style.min.css"))
	.pipe(cleancss({keepSpecialComments : 1}))
	.pipe(gulp.dest("dist/css/"));
});


gulp.task('default',[ "devcss", "devjs"]);
