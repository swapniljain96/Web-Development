//jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


// GET FUNCTION
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// POST FUNCTION
app.post("/", function(req, res) {
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  console.log(firstName, lastName, email);

  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_feilds: {
        FIRSTNAME: firstName,
        LASTNAME: lastName
      }
    }]
  };
  const jsonData = JSON.stringify(data);
  console.log(jsonData);

  const URL = "https://us1.api.mailchimp.com/3.0/lists/4b41185b57abc";

  const options = {
    method: "POST",
    auth: "sj123jain:0b519007a858bb9fb83154790ccef9f9-us1"
  };

  const request = https.request(URL, options, function(response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }


    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});

app.post("/failure", function(req, res) {
  res.redirect("/");
});


// LISTEN FUNCTION
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running in port 3000.");
});


// apiKey
// 0b519007a858bb9fb83154790ccef9f9-us1

// UniqueID or listid
// 4b41185b57


// //console.log("Post Received");
// // console.log(req.body.cityName);
// const city=req.body.cityName;
// const apiKey="e00c1dc031351ae168b18bad2bd158a5";
// const unit="metric";
// const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units="+unit;
// https.get(url, function(response) {
//   // console.log(response.statusCode);
//
//   response.on("data", function(data) {
//     // console.log(data);  that gives data in HEX format
//     const weatherData = JSON.parse(data);
//     // console.log(weatherData);
//     const temp = weatherData.main.temp;
//     // console.log(temp);
//     const desc = weatherData.weather[0].description;
//     // console.log(desc);
//     const icon=weatherData.weather[0].icon;
//     const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"
//     res.write("<h1>The temperature in "+city+" is: " + temp + " degree Celcius</h1>");
//     res.write("<p>The weather in "+city+" is: " + temp + " <p>");
//     res.write("<img src="+imageURL+">");
//     res.send();
//     // const object={
//     //   name:"Swapnil",
//     //   clg:"IIIT-B"                            this stringify function changes
//     // }                                         the JSON format to string
//     // console.log(JSON.stringify(object));
//
//   })
// })
// //res.send("Server is up and running"); /// this can't be here because we cant have 2 res.send();
