var fs = require('fs');
var path = require('path');

module.exports = function (file, ext, callback) {
	fs.readdir(file, function (err, files) {
	if (err)
		return callback(err)
	else {
	files = files.filter(function(file) {
		if (path.extname(file) === "." + ext) 
			return true;
	})
	return callback(null, files);
	}
	})
}

// notes: filter() creates a new array based on the criteria of the function
// module.exports not much known except it's used to export modules to other files
// this one took a while, had to do some research on stackoverflow
// keep practicing this because it's good for working with callbacks and modules in general

/*
official module solution(for main file solution see step6.js):
   var fs = require('fs')
   var path = require('path')

   module.exports = function (dir, filterStr, callback) {

     fs.readdir(dir, function (err, list) {
       if (err)
         return callback(err)

       list = list.filter(function (file) {
         return path.extname(file) === '.' + filterStr
       })

       callback(null, list)
     })
   }
*/

