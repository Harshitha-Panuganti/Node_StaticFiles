var express= require("express");
var app=express();
app.listen(4500,() =>{
    console.log("server started")
})

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/public/login.html')
})

app.use(express.static(__dirname+ '/public'))
