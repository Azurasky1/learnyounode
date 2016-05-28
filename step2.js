// the global process object can access command-line arguments
// the argv property is an array that contains the complete command line
// the first argument is always node, and the second argument is always the path to the program file
// all elements of process.argv are strings

function findArgSum () {
	var sum = 0;
	for (i = 2; i < process.argv.length; i++) {
		sum += Number(process.argv[i]);
		// sum += stringToNum;
	}
	console.log(sum);
	};
findArgSum();

// Notes: 
// Remember that a variable is not a number until assigned to an integer!