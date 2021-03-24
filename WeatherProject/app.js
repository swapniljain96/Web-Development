const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e00c1dc031351ae168b18bad2bd158a5&units=metric";
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      // console.log(data);  that gives data in HEX format
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      const desc = weatherData.weather[0].description;
      console.log(desc);
      const icon=weatherData.weather[0].icon;
      const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"
      res.write("<h1>The temperature in London is: " + temp + " degree Celcius</h1>");
      res.write("<p>The weather in London is: " + temp + " <p>");
      res.write("<img src="+imageURL+">");
      res.send();



      // const object={
      //   name:"Swapnil",
      //   clg:"IIIT-B"                            this stringify function changes
      // }                                         the JSON format to string
      // console.log(JSON.stringify(object));

    })
  })
  //res.send("Server is up and running"); /// this can't be here because we cant have 2 res.send();
})

app.listen(3000, function() {
  console.log("Server is running in port 3000.");
})
