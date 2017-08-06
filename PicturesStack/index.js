/**
 * Created by cwalk on 8/6/2017.
 */
var fs = require('fs');
var ExifImage = require('exif').ExifImage;
var directory;
process.argv.forEach(function (val, index, array) {
    directory = val;
});
fs.readdir(directory, function (err, files) {
    files.forEach(function (file) {
        new ExifImage({ image: directory + '\\' + file }, function (error, exifData) {
            if (exifData) {
                console.log(exifData.exif.CreateDate); // Do something with your data!
            }
        });
        // fs.stat(directory + '\\' + file, (err: any, stat) => {
        // 	console.log(stat);
        // });
    });
});
//# sourceMappingURL=index.js.map