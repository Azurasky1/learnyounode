/* step 3
 
   Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file.

 */
 
 var fs = require('fs');
 var file = fs.readFileSync(process.argv[2]);
 file = file.toString();
 console.log(file.split("\n").length - 1);
 
     // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
	
	  /* If you're looking for an easy way to count the number of newlines in a
  string, recall that a JavaScript String can be .split() into an array of
  substrings and that '\n' can be used as a delimiter. Note that the test
  file does not have a newline character ('\n') at the end of the last line,
  so using this method you'll end up with an array that has one more element
  than the number of newlines.
  
  */
  
  // notes: pretty straightforward
  // fs = file system module
  // buffer object is node's way of representing arrays of data in many formats
  // toString() converts buffers to strings

 
 
 
 
