const express = require("express");
const app = express();
app.get("/", function(request, response){
    response.send("<h1>Hello world</h1>");
});

app.get("/contact", function(request,response){
    response.send("Contact me at lol123@gmail.com");
});

app.get("/about", function(request,response){
    response.send("pro gadi page idhi");
});

app.get("/hobbies", function(request,response){
    response.send("pora babu!!");
});

app.listen(3000, function(){
    console.log("Server is running on the port 3000"); 
});