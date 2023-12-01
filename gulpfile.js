const gulp = require('gulp');

function funcaoPadrao(callback) {
    console.log("Executando via gulp");
    callback();
}

function dizOi(callback) {
    console.log("olá gulp");
    dizTchau();
    callback();
}

function dizTchau() {
    console.log("Tchau Gulp");
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;