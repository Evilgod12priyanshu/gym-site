const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req , res){
    const url= "https://https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={0cbe0081545feca1c76311e3e1830bc4}"
    https.get(url, function(response){
        console.log(response);
    })
    res.send("Server is running"); 
})




app.listen(3000, function(){
    console.log("server is running on port 3000.");
})





