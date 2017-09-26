// (function() {
//   // Initialize lunr with the fields to be searched, plus the boost.
//   var idx = lunr(function () {
//     this.field('id');
//     this.field('name', { boost: 10 });
//     this.field('content');
//     this.field('code');
//     this.field('family');
//   });
// console.log('ok');
//   // Get the generated search_data.json file so lunr.js can search it locally.
//   window.data = $.getJSON('/search_data.json');
//
//   // Wait for the data to load and add it to lunr
//   window.data.then(function(loaded_data){
//     $.each(loaded_data, function(index, value){
//       idx.add(
//         $.extend({ "id": index }, value)
//       );
//     });
//   });
//
//   // Event when the form is submitted
//   $("#site-search").submit(function(event){
//       // event.preventDefault();
//       var query = $("#search-box").val(); // Get the value for the text field
//       var results = idx.search(query); // Get lunr to perform a search
//       display_search_results(results); // Hand the results off to be displayed
//   });
//
//   function display_search_results(results) {
//     var $search_results = $("#search-results");
//
//     // Wait for data to load
//     window.data.then(function(loaded_data) {
//
//       // Are there any results?
//       if (results.length) {
//         $search_results.empty(); // Clear any old results
//
//         // Iterate over the results
//         results.forEach(function(result) {
//           var item = loaded_data[result.ref];
//
//           // Build a snippet of HTML for this result
//           var appendString = '<li><a href="' + item.url + '">' + item.title + '</a></li>';
//
//           // Add the snippet to the collection of results.
//           $search_results.append(appendString);
//         });
//       } else {
//         // If there are no results, let the user know.
//         $search_results.html('<li>No results found.<br/>Please check spelling, spacing, yada...</li>');
//       }
//     });
//   }
// });

var data = new Array();

data = $.getJSON('/search_data.json');

var idx = lunr(function () {
  // this.field('id');
  this.field('name', { boost: 10 });
  this.field('content');
  this.field('code');
  this.field('family');

  // var data = window.data.responseJSON;
  // console.log(data);

  // for (var i = 0; i < data.length; i++) {
  //   data[i].add()
  // };

  data.forEach(function (getData){
    this.add(getData)
  }, this);

});


$(".search-form").submit(function(){
    // event.preventDefault();
    var query = $("#search-box").val(); // Get the value for the text field
    var results = idx.search(query); // Get lunr to perform a search
    display_search_results(results); // Hand the results off to be displayed
});


function display_search_results(results) {
  var $search_results = $("#search-results");

  // Are there any results?
  if (results.length) {
    $search_results.empty(); // Clear any old results

    // Iterate over the results
    results.forEach(function(result) {
      var item = loaded_data[result.ref];

      // Build a snippet of HTML for this result
      var appendString = '<li><a href="' + item.url + '">' + item.title + '</a></li>';

      // Add the snippet to the collection of results.
      $search_results.append(appendString);
    });
  } else {
    // If there are no results, let the user know.
    $search_results.html('<li>No results found.<br/>Please check spelling, spacing, yada...</li>');
  }
};

// var results = idx.search("Freezer");
// console.log(data);
// console.log(results);
