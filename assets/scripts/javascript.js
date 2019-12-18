
//var hardCodeCity= "Las Vegas"
//var id="524901"
//var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3bf7feb8cded7176958e566058a498c2"

$("#searchButton").click(function(){
var city = $("#cityName").val();
console.log(city)
var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3bf7feb8cded7176958e566058a498c2"

$.ajax({
  url: queryURL,
  method: "GET"
})
  // After data comes back from the request
  .then(function(response) {
    
    console.log(response);
    var windSpeed=response.wind.speed 
    
    var humidity=response.main.humidity

    var kelvinTemp=response.main.temp
    
    var tempF=kelvinTemp * 1.8 - 459.67
    

   var displayTemp= $("#temp").append(tempF)
   var displayHum= $("#humidity").append(humidity)
   var displayWS= $("#windSpeed").append(windSpeed)
  
    
  });
  
}); 
 