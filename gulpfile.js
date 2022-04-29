// npm init
// npm i --save-dev gulp gulp-plumber gulp-sourcemaps gulp-rename gulp-imagemin@7.1.0 gulp-webp sass gulp-sass gulp-postcss autoprefixer cssnano typescript gulp-typescript gulp-terser-js

const {src, dest, parallel, series, watch} = require("gulp")
const plumber = require("gulp-plumber")
const sourcemaps = require("gulp-sourcemaps")
const rename = require("gulp-rename")

// const imageResize = require("gulp-image-resize")
const imagemin = require("gulp-imagemin")
const webp = require("gulp-webp")

const sass = require("gulp-sass")(require("sass"))
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")

const ts = require("gulp-typescript")
const terser = require("gulp-terser-js")

const paths = {
    srcImg : "./src/img/**/*.{jpg,png,webp}",
    destImg : "./docs/img/",
    srcJS : "./src/ts/**/*.ts",
    destJS : "./docs/js/",
    srcCSS : "./src/scss/**/*.scss",
    destCSS : "./docs/css/"
}

function img(done) {
    src( paths.srcImg )
        .pipe( plumber() )
        // .pipe( imageResize({
        //     width : 900,
        //     crop : false,
        //     upscale : false,
        //     imageMagick : true
        // }) )
        // .pipe( rename(function(path){
        //     path.basename = "img-" + i++
        //         path.dirname = ""
        // }) )
        .pipe( imagemin() )
        .pipe( dest( paths.destImg ) ) //jpg
        .pipe( webp() )
        .pipe( dest( paths.destImg ) ) //webp
    done()
}
function css(done) {
    src( paths.srcCSS )
        .pipe( plumber() )
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss([autoprefixer(), cssnano()]) )
        .pipe( rename({basename: "bundle.min"}) )
        .pipe( sourcemaps.write(".") )
        .pipe( dest( paths.destCSS ) )
    done()
}
function js(done) {
    src( paths.srcJS )
        .pipe( plumber() )
        .pipe( sourcemaps.init() )
        .pipe( ts({
            "strict" : true,
            "target": "es6",
            "outFile": "bundle.min.js"
        }) )
        .pipe( terser() )
        .pipe( sourcemaps.write(".") )
        .pipe( dest( paths.destJS ) )
    done()
}

function watchFiles(done) {
    watch("./src/scss", css)
    watch("./src/ts", js)
    done()
}

exports.img = img
exports.css = css
exports.js = js

exports.dev = parallel(css, js)
exports.default = parallel(css, js, watchFiles)