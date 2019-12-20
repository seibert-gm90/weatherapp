
//var hardCodeCity= "Las Vegas"
//var id="524901"
//var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3bf7feb8cded7176958e566058a498c2"

$("#searchButton").click(function () {
$("#temp").text("Temp:");
$("#humidity").text("Humidity:");
$("#windSpeed").text("Windspeed:");
$("#city").text("");
$("#date").text("");





  var city = $("#cityName").val();
  console.log(city)
  var queryURLCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3bf7feb8cded7176958e566058a498c2"


  $.ajax({
    url: queryURLCurrentWeather,
    method: "GET"
  })
    // After data comes back from the request
    .then(function (response) {

      console.log(response);

      //creating variables in order to use info I get back  
      var windSpeed = response.wind.speed
      var humidity = response.main.humidity
      var kelvinTemp = response.main.temp
      var tempF = kelvinTemp * 1.8 - 459.67
      var roundedTemp = tempF.toFixed(0)
      var cityName = response.name

      var cityID = response.id
      var lon = response.coord.lon
      var lat = response.coord.lat
      var UTCdate = response.dt

      //display variables onto page
      var displayTemp = $("#temp").append(roundedTemp)
      var displayHum = $("#humidity").append(humidity)
      var displayWS = $("#windSpeed").append(windSpeed)
      var displayCity = $("#city").append(cityName)


      function convertDate() {

        // Unixtimestamp

        // Months array
        var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // Convert timestamp to milliseconds
        var date = new Date(UTCdate * 1000);

        // Year
        var year = date.getFullYear();

        // Month
        var month = months_arr[date.getMonth()];

        // Day
        var day = date.getDate();

        var convdataTime = month+ "" + day + "" + year;

        $("#date").append(convdataTime)
      };
      convertDate()

      var queryURLFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=3bf7feb8cded7176958e566058a498c2"

      var weatherDays = ["0,8,16,24,32"]

      $.ajax({
        url: queryURLFiveDay,
        method: "GET"
      })

        .then(function (response) {

        //day one variables
         var dateDay1= response.list[0].dt_txt;
         var iconDay1= response.list[0].weather[0].icon;
         var tempDay1= response.list[0].main.temp;
         var FtempDay1= tempDay1 * 1.8 - 459.67;
         var RoundedFtempDay1= FtempDay1.toFixed(0);
         var humDay1= response.list[0].main.humidity;

         //day two variables
         var dateDay2= response.list[8].dt_txt;
         var iconDay2= response.list[8].weather[0].icon;
         var tempDay2= response.list[8].main.temp;
         var FtempDay2= tempDay2 * 1.8 - 459.67;
         var RoundedFtempDay2= FtempDay2.toFixed(0);
         var humDay2= response.list[8].main.humidity;

         //day three variables
         var dateDay3= response.list[16].dt_txt;
         var iconDay3= response.list[16].weather[0].icon;
         var tempDay3= response.list[16].main.temp;
         var FtempDay3= tempDay3 * 1.8 - 459.67;
         var RoundedFtempDay3= FtempDay3.toFixed(0);
         var humDay3= response.list[16].main.humidity;

         //day four variables
         var dateDay4= response.list[24].dt_txt;
         var iconDay4= response.list[24].weather[0].icon;
         var tempDay4= response.list[24].main.temp;
         var FtempDay4= tempDay4 * 1.8 - 459.67;
         var RoundedFtempDay4= FtempDay4.toFixed(0);
         var humDay4= response.list[24].main.humidity;

         //day five variables
         var dateDay5= response.list[32].dt_txt;
         var iconDay5= response.list[32].weather[0].icon;
         var tempDay5= response.list[32].main.temp;
         var FtempDay5= tempDay5 * 1.8 - 459.67;
         var RoundedFtempDay5= FtempDay5.toFixed(0);
         var humDay5= response.list[32].main.humidity;
 
 

          
          console.log(response)
          //day one weather data
          $("#fdDate1").text(dateDay1);
          $("#fdIcon1").attr("src", "http://openweathermap.org/img/wn/" + iconDay1 + "@2x.png");
          $("#fdTemp1").text("Temp: " + RoundedFtempDay1);
          $("#fdHumidity1").text("Humidity: " + humDay1)
          
          //day two weather data
          $("#fdDate2").text(dateDay2);
          $("#fdIcon2").attr("src", "http://openweathermap.org/img/wn/" + iconDay2 + "@2x.png");
          $("#fdTemp2").text("Temp: " + RoundedFtempDay2);
          $("#fdHumidity2").text("Humidity: " + humDay2)

          //day three weather data
          $("#fdDate3").text(dateDay3);
          $("#fdIcon3").attr("src", "http://openweathermap.org/img/wn/" + iconDay3 + "@2x.png");
          $("#fdTemp3").text("Temp: " + RoundedFtempDay3);
          $("#fdHumidity3").text("Humidity: " + humDay3)

          //day four weather data
          $("#fdDate4").text(dateDay4);
          $("#fdIcon4").attr("src", "http://openweathermap.org/img/wn/" + iconDay4 + "@2x.png");
          $("#fdTemp4").text("Temp: " + RoundedFtempDay4);
          $("#fdHumidity4").text("Humidity: " + humDay4)

          //day five weather data
          $("#fdDate5").text(dateDay5);
          $("#fdIcon5").attr("src", "http://openweathermap.org/img/wn/" + iconDay5 + "@2x.png");
          $("#fdTemp5").text("Temp: " + RoundedFtempDay5);
          $("#fdHumidity5").text("Humidity: " + humDay5)
       

      var queryURLuv = "https://api.openweathermap.org/data/2.5/uvi?appid=c52446afb86550ccded80a7b29c8a931" + "&lat=" + lat + "&lon=" + lon
      $.ajax({
        url: queryURLuv,
        method: "GET"
      })
        .then(function (response) {
          console.log(response)
          var UV=response.value
          $("#UV").text("UV index: " + UV)
          $("#currentDayIcon").attr("src", "http://openweathermap.org/img/wn/" + iconDay1 + "@2x.png")




        })
      });

    });

});
