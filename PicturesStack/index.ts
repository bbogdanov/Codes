/**
 * Created by cwalk on 8/6/2017.
 */

const fs = require('fs');
const ExifImage = require('exif').ExifImage;

let directory: any;

process.argv.forEach((val: string, index: number, array: Array<any>) => {
	directory = val;
});

fs.readdir(directory, (err: Error, files: any) => {
	files.forEach((file) => {
		new ExifImage({ image :  directory + '\\' + file}, (error: Error, exifData: any) => {
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
