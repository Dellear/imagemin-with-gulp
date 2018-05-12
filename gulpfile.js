const gulp = require('gulp');
const imagemin = require('imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminOptipng = require('imagemin-optipng');


gulp.task('default', function (done) {
    const jpgmin = imageminJpegRecompress({
        accurate: true,//高精度模式
        quality: 'low',//图像质量:low, medium, high and veryhigh;
        method: 'smallfry',//网格优化:mpe, ssim, ms-ssim and smallfry;
        target: 0.8,
        min: 50,//最低质量
        max: 80,
        loops: 3,//循环尝试次数, 默认为6;
        progressive: true,//基线优化
        subsample: 'default'//子采样:default, disable;
    }),
        pngmin = imageminOptipng({
            optimizationLevel: 4
        });


        imagemin(['src/images/*.{jpg,png}'], 'dist/images', {
            plugins: [jpgmin, pngmin]
        }).then(files => {
            files.forEach(file => {
                console.log(file.path);
            });
            done();
        });
});