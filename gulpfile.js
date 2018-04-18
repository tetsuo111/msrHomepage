var gulp = require('gulp');
var sass = require('gulp-sass');
var pleeease = require('gulp-pleeease');
var frontNote = require('gulp-frontnote');

//sassのコンパイルを可能にします。
gulp.task('sass', function(){
	gulp.src('css/sass/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(pleeease({
		autoprefixer: { 'browsers': ['last 2 versions', 'ie 6', 'ie 7', 'ie 8', 'Safari 4','Safari 5', 'Android 2.3', 'iOS 4' ],cascade: false },
			minifier: false,
			rem: false,
			pseudoElements: false,
			mqpacker: true
	}))
		.pipe(gulp.dest('css/sass/'));
});

//sassファイルを監視してくれます。
gulp.task('sass-watch', ['sass'], function(){
	var watcher = gulp.watch('css/sass/**/*.scss', ['sass']);
	watcher.on('change', function(event) {
	});
});

//styleガイド制作
gulp.task('doc', function() {
	gulp.src('css/wv_style.css')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(frontNote({
		out: './_styleguide',
		css: ['css/style.css']
	}));
});
