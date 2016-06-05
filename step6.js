var myModule = require('./step6module.js');
var file = process.argv[2];
var ext = process.argv[3];

var callback = function (err, files) {
		if (err) throw err;
		files.forEach(function (file) {
			console.log(file)
		})
}

myModule(file, ext, callback);

/*
official solution (for module solution see step6module.js):
  var filterFn = require('./solution_filter.js')
  var dir = process.argv[2]
  var filterStr = process.argv[3]

  filterFn(dir, filterStr, function (err, list) {
    if (err)
      return console.error('There was an error:', err)

    list.forEach(function (file) {
      console.log(file)
    })
  })
*/
