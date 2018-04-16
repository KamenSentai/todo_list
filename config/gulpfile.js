/* ---------------------------------------------------------------------------------------------------- *\
|*
|* REQUIRES
|*
\* ---------------------------------------------------------------------------------------------------- */

const browserSync      = require('browser-sync').create()
const babelify         = require('babelify')
const browserify       = require('browserify')
const buffer           = require('vinyl-buffer')
const source           = require('vinyl-source-stream')
const gulp             = require('gulp')
const gulpAutoprefixer = require('gulp-autoprefixer')
const gulpCssnano      = require('gulp-cssnano')
const gulpNotify       = require('gulp-notify')
const gulpPlumber      = require('gulp-plumber')
const gulpStylus       = require('gulp-stylus')
const gulpUglify       = require('gulp-uglify')

/* ---------------------------------------------------------------------------------------------------- *\
|*
|* SETTINGS
|*
\* ---------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------- *\
|* PATHS
\* -------------------------------------------------- */

const path =
{
	name : 'works/todo_list',
	dist :
	{
		root    : './../dist/',
		scripts : './../dist/scripts/',
		styles  : './../dist/styles/',
		views   : './../dist/views/',
		assets  : './../dist/assets/'
	},
	src  :
	{
		root    : './../src/',
		scripts : './../src/scripts/',
		styles  : './../src/styles/',
		views   : './../src/views/',
		assets  : './../src/assets/'
	}
}
/* -------------------------------------------------- *\
|* MESSAGES
\* -------------------------------------------------- */

const message =
{
	compiled   : '<%= file.relative %> : file compiled',
	exported   : '<%= file.relative %> : file exported',
	transpiled : '<%= file.relative %> : file transpiled',
	error      : '<%= error.message %>'
}

/* ---------------------------------------------------------------------------------------------------- *\
|*
|* TASKS
|*
\* ---------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------- *\
|* ASSETS
\* -------------------------------------------------- */

gulp.task('assets', () =>
{
	return gulp.src([`${path.src.assets}**/*.*`])
		.pipe(gulpPlumber(
			{
				errorHandler : gulpNotify.onError(
					{
						title   : 'Assets',
						message : `${message.error}`,
						sound   : 'beep'
					})
			}))
		.pipe(gulp.dest(path.dist.assets))
		.pipe(gulpNotify(
			{
				title   : 'Assets',
				message : `${message.exported}`,
				sound   : 'beep'
			}))
})

/* -------------------------------------------------- *\
|* LIBS
\* -------------------------------------------------- */

gulp.task('libs', () =>
{
	// Update styles libraries
	gulp.src(`${path.src.styles}lib/*.css`)
		.pipe(gulpPlumber(
			{
				errorHandler : gulpNotify.onError(
					{
						title   : 'Styles lib',
						message : `${message.error}`,
						sound   : 'beep'
					})
			}))
		.pipe(gulp.dest(`${path.dist.styles}`))
		.pipe(gulpNotify(
			{
				title   : 'Style libraries',
				message : `${message.exported}`,
				sound   : 'beep'
			}))

	// Update scripts libraries
	gulp.src(`${path.src.scripts}lib/*.js`)
		.pipe(gulpPlumber(
			{
				errorHandler : gulpNotify.onError(
					{
						title   : 'Scripts lib',
						message : `${message.error}`,
						sound   : 'beep'
					})
			}))
		.pipe(gulp.dest(`${path.dist.scripts}`))
		.pipe(gulpNotify(
			{
				title   : 'Script libraries',
				message : `${message.exported}`,
				sound   : 'beep'
			}))
})

/* -------------------------------------------------- *\
|* SCRIPTS
\* -------------------------------------------------- */

gulp.task('scripts', () =>
{
	return browserify(
		{
			debug   : true,
			entries : `${path.src.scripts}main.js`
		})
		.transform(babelify.configure(
			{
				presets : ['babel-preset-env'].map(require.resolve)
			}))
		.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(gulpPlumber(
			{
				errorHandler : gulpNotify.onError(
					{
						title   : 'Scripts',
						message : `${message.error}`,
						sound   : 'beep'
					})
			}))
		.pipe(gulpUglify())
		.pipe(gulp.dest(`${path.dist.scripts}`))
		.pipe(gulpNotify(
			{
				title   : 'Scripts',
				message : `${message.transpiled}`,
				sound   : 'beep'
			}))
})

/* -------------------------------------------------- *\
|* STYLES
\* -------------------------------------------------- */

gulp.task('styles', () =>
{
	return gulp.src(`${path.src.styles}main.styl`)
		.pipe(gulpPlumber(
			{
				errorHandler : gulpNotify.onError(
					{
						title   : 'Styles',
						message : `${message.error}`,
						sound   : 'beep'
					})
			}))
		.pipe(gulpStylus())
		.pipe(gulpCssnano())
		.pipe(gulpAutoprefixer())
		.pipe(gulp.dest(path.dist.styles))
		.pipe(gulpNotify(
			{
				title   : 'Styles',
				message : `${message.compiled}`,
				sound   : 'beep'
			}))
})

/* -------------------------------------------------- *\
|* VIEWS
\* -------------------------------------------------- */

gulp.task('views', () =>
{
	return gulp.src(
		[
			`${path.src.views}*.php`,
			`${path.src.views}**/*.php`,
			`${path.src.views}**/**/*.php`,
			`${path.src.views}**/**/**/*.php`
		])
		.pipe(gulpPlumber(
			{
				errorHandler : gulpNotify.onError(
					{
						title   : 'Views',
						message : `${message.error}`,
						sound   : 'beep'
					})
			}))
		.pipe(gulp.dest(path.dist.views))
		.pipe(gulpNotify(
			{
				title   : 'Views',
				message : `${message.exported}`,
				sound   : 'beep'
			}))
})

/* -------------------------------------------------- *\
|* ROOT
\* -------------------------------------------------- */

gulp.task('root', () =>
{
	return gulp.src(
		[
			`${path.src.root}.*`,
			`${path.src.root}*.*`
		])
		.pipe(gulpPlumber(
			{
				errorHandler : gulpNotify.onError(
					{
						title   : 'Root',
						message : `${message.error}`,
						sound   : 'beep'
					})
			}))
		.pipe(gulp.dest(path.dist.root))
		.pipe(gulpNotify(
			{
				title   : 'Root',
				message : `${message.exported}`,
				sound   : 'beep'
			}))
})

/* -------------------------------------------------- *\
|* WATCH
\* -------------------------------------------------- */

gulp.task('watch', () =>
{
	// Run browser
	browserSync.init(
		{
			browser : 'Google Chrome',
			proxy   : `http://localhost/${path.name}/dist`
		})

	// Watch assets
	gulp.watch(`${path.src.assets}**/*.*`, ['assets'])
		.on('change', browserSync.reload)

	// Watch libs
	gulp.watch(
		[
			`${path.src.styles}lib/*.*`,
			`${path.src.scripts}lib/*.*`
		], ['libs'])
		.on('change', browserSync.reload)

	// Watch scripts
	gulp.watch(
		[
			`${path.src.scripts}*.*`,
			`${path.src.scripts}components/*.*`,
			`${path.src.scripts}components/**/*.*`
		], ['scripts'])
		.on('change', browserSync.reload)

	// Watch styles
	gulp.watch(
		[
			`${path.src.styles}*.*`,
			`${path.src.styles}components/*.*`,
			`${path.src.styles}components/**/*.*`
		], ['styles'])
		.on('change', browserSync.reload)

	// Watch views
	gulp.watch(
		[
			`${path.src.views}*.*`,
			`${path.src.views}**/*.*`,
			`${path.src.views}**/**/*.*`,
			`${path.src.views}**/**/**/*.*`
		], ['views'])
		.on('change', browserSync.reload)

	// Watch root
	gulp.watch(
		[
			`${path.src.root}.*`,
			`${path.src.root}*.*`
		], ['root'])
		.on('change', browserSync.reload)
})

/* -------------------------------------------------- *\
|* DEFAULT
\* -------------------------------------------------- */

gulp.task('default', ['assets', 'libs', 'scripts', 'styles', 'views', 'root', 'watch'])