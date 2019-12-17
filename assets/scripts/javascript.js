var city = $("#searchBar").val();
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={3bf7feb8cded7176958e566058a498c2}";

$.ajax({
  url: queryURL,
  method: "GET"
})
  // After data comes back from the request
  .then(function(response) {
    console.log(queryURL);

    console.log(response);
  });
