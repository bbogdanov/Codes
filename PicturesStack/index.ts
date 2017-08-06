/**
 * Created by cwalk on 8/6/2017.
 */

const fs = require('fs');
const ExifImage = require('exif').ExifImage;

let directory: any;

process.argv.forEach(function (val, index, array) {
	directory = val;
});

fs.readdir(directory, (err, files) => {
	files.forEach((file) => {
		new ExifImage({ image :  directory + '\\' + file}, function (error, exifData) {
			if(exifData) {

				/* TODO Create comparing dates of files and create tree structure.
				 * One root directory -> many directories -> each directory has many files.
				 * Use BFS to add each file to the right physical folder.
				**/

				// FIX a lof of RAM needed when listing large directory content with this library. ( 11 GB )
				// Optimize the process
				console.log(exifData.exif.CreateDate);
			}
		});
	});
});
