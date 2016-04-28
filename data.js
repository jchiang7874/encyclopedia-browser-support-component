var data = {
  /* Add your data here */
  name: ".sort()",

  description: "The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.",

  examples: [
    {
      title: "First Example Title",
      code: "var arr = []; ... "
    },
    {
    	title: "Second Example Title",
    	code: "var arr = []; ... "
    }
  ]
}; //data.examples[0].title => "First Example Title"

var syntax = {
	name: "Subtitle Here",
	description: "Explanation goes here.",
	code: "var myArray = [6, 5, 4, 3, 1, 2]; \n myArray.sort(); \n console.log(myArray); // -> 1, 2, 3, 4, 5, 6"
}

var tips = {
	name: "Subtitle Here",
	description: "Explanation goes here.",
	details: [ "First details of tip", "Second details of tip"]
}


$(document).ready(function(){
  $('#example').load('example-template.html'); //#add-examps 
  $('#syntax').load('syntax-template.html');
  $('#more-examples').load('more-examp-template.html');
  $('#tips').load('tips-template.html');
});

