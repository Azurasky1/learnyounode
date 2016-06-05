var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var ext = process.argv[3];
var filtered = [];

fs.readdir(file, function callback(error, list) {
	if (error) console.error(error);
	else {
		for (i = 0; i < list.length; i++) {
			if (path.extname(list[i]) === "." + ext) {
				filtered.push(list[i]);
			}
		}
		for (i = 0; i < filtered.length; i++) {
			console.log(filtered[i]);
		}
	}	
});

// remember to use the function keyword when using callbacks
// the official solution didn't use an array, but instead logged each
// string using a forEach method
// official solution:
/*
    var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function(file) {
          if (path.extname(file) === ext) {
              console.log(file)
          }
      })
    })
*/
