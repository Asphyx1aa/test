const { src, dest, parallel, series } = require('gulp');

const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const htmlmin = require('gulp-htmlmin');
const del = require('del');

const clear = () => {
    return del('build');
}

const html = () => {
    return src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('build'))
}

exports.html = html;
exports.default = series(clear, html);