const fs = require("fs");
const readline = require("readline");
const stream = require("stream");
const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const sourceMaps = require("gulp-sourcemaps");
const gutil = require("gulp-util");
const path = require("path");
const realFavicon = require("gulp-real-favicon");
const notifier = require("node-notifier");
const imagemin = require("gulp-imagemin");
const ini = require("ini");
const url = require("url");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

const foldername = path.win32.basename(__dirname);
const paths = {
  images: "./images/*",
};

// browsersync
gulp.task(
  "sass-browsersync",
  gulp.series(function bs() {
    return gulp
      .src("./style.scss")
      .pipe(sourceMaps.init())
      .pipe(
        sass().on("error", function(err) {
          console.error(err.message);
          browserSync.notify(err.message, 8000); // Display error in the browser
          this.emit("end"); // Prevent gulp from catching the error and exiting the watch process
          notifier.notify({
            title: "Sass Error",
            message: err.message,
          });
        })
      )
      .pipe(autoprefixer())
      .pipe(cleanCss())
      .pipe(sourceMaps.write("./"))
      .pipe(gulp.dest("./"))
      .pipe(browserSync.stream());
  })
);

// Main task serve
gulp.task(
  "serve",
  gulp.parallel("sass-browsersync", function serve() {
    browserSync.init({
      server: true,
    });

    gulp.watch("**/*.scss", gulp.parallel("sass-browsersync"));
    gulp.watch(
      "../bootstrap-core-2/**/*.scss",
      gulp.parallel("sass-browsersync")
    );
    gulp.watch("./templates/*.php").on("change", browserSync.reload);
    gulp.watch("./images/*").on("change", browserSync.reload);
    gulp
      .watch("../../data/headerfooter/cache*.dat")
      .on("change", browserSync.reload);

    // stop old version of gulp watch from running when you modify the gulpfile
    gulp.watch("gulpfile.js").on("change", () => process.exit(0));
  })
);

// SASS --compile and uglify + autoprefixer. Config for autoprefixer is in packeges.json
gulp.task(
  "sass",
  gulp.series(function compileSass() {
    return gulp
      .src("./style.scss")
      .pipe(sourceMaps.init())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cleanCss())
      .pipe(sourceMaps.write("./"))
      .pipe(gulp.dest("./"));
  })
);

// SASS --compile and uglify + autoprefixer editors.
gulp.task(
  "compile-editors",
  gulp.parallel(function compileEditors() {
    return gulp
      .src("./editor*.scss")
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cleanCss())
      .pipe(gulp.dest("./"));
  })
);
gulp.task(
  "compile-seniors",
  gulp.parallel(function compileSeniors() {
    return gulp
      .src("./seniori/src/seniori.scss")
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cleanCss())
      .pipe(gulp.dest("./seniori/"));
  })
);

// Generate favicons
var FAVICON_DATA_FILE = "favicons/faviconData.json";
gulp.task(
  "generate-favicon",
  gulp.series(function(done) {
    var municipalName;
    //Get municipal name from skin config
    var instream = fs.createReadStream("./config/config.ini.php");
    var outstream = new stream();
    var rl = readline.createInterface(instream, outstream);
    let m;
    const regex_skin = /^(?!;)\s*kak_autor\s*=\s*"(.*)"/gi;
    rl.on("line", function(line) {
      if ((m = regex_skin.exec(line)) !== null) {
        municipalName = m[1];
        gutil.log(line);
      }
    }).on("close", function() {
      realFavicon.generateFavicon(
        {
          masterPicture: "favicons/favicon.png",
          dest: "favicons/",
          iconsPath: "/favicons/",
          design: {
            ios: {
              pictureAspect: "backgroundAndMargin",
              backgroundColor: "#ffffff",
              margin: "14%",
              assets: {
                ios6AndPriorIcons: false,
                ios7AndLaterIcons: false,
                precomposedIcons: false,
                declareOnlyDefaultIcon: true,
              },
            },
            desktopBrowser: {},
            windows: {
              pictureAspect: "noChange",
              backgroundColor: "#da532c",
              onConflict: "override",
              assets: {
                windows80Ie10Tile: false,
                windows10Ie11EdgeTiles: {
                  small: false,
                  medium: true,
                  big: false,
                  rectangle: false,
                },
              },
            },
            androidChrome: {
              pictureAspect: "noChange",
              themeColor: "#ffffff",
              manifest: {
                name: municipalName,
                display: "standalone",
                orientation: "notSet",
                onConflict: "override",
                declared: true,
              },
              assets: {
                legacyIcon: false,
                lowResolutionIcons: false,
              },
            },
            safariPinnedTab: {
              pictureAspect: "silhouette",
              themeColor: "#5bbad5",
            },
          },
          settings: {
            scalingAlgorithm: "Mitchell",
            errorOnImageTooSmall: false,
          },
          markupFile: FAVICON_DATA_FILE,
        },
        function() {
          done();
        }
      );
    });
  })
);

// Check for updates on RealFaviconGenerator (think: Apple has just
gulp.task(
  "check-for-favicon-update",
  gulp.series(function(done) {
    var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
    realFavicon.checkForUpdates(currentVersion, function(err) {
      if (err) {
        throw err;
      }
    });
  })
);

//scripts
gulp.task(
  "scripts",
  gulp.series(function scripts() {
    var jsFiles = "../bootstrap-core-2/js/gcm/*.js",
      jsDest = "./js";

    return gulp
      .src(jsFiles)
      .pipe(concat("scripts.js"))
      .pipe(gulp.dest(jsDest))
      .pipe(rename("scripts.min.js"))
      .pipe(uglify())
      .pipe(gulp.dest(jsDest));
  })
);

// dist
gulp.task(
  "dist",
  gulp.parallel("generate-favicon", "compile-editors", function image(done) {
    //optimize images
    return gulp
      .src("./images/*")
      .pipe(imagemin())
      .pipe(gulp.dest("./images/"));
    done();
  })
);

// aliases
gulp.task("c", gulp.series("sass"));
gulp.task("s", gulp.series("serve"));
gulp.task("d", gulp.series("dist"));
gulp.task("ce", gulp.series("compile-editors"));
gulp.task("cs", gulp.series("compile-seniors"));
gulp.task("gf", gulp.series("generate-favicon"));
gulp.task("fav", gulp.series("generate-favicon"));
