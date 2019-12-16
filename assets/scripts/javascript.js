var title = "the+notebook";
var queryURL = ;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.Runtime);
});