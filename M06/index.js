var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var logger = require("morgan");


const mymiddleware = (req,res,next)=>{
    if(req.params.nim === 181110085){
        console.log("NIM sudah benar");
        const err = {
            nama: "181110085",
        };
        next(err);
    }else{
        console.log("NIM Tidak Terdaftar");
        const err = {
            data :  req.params.nim,
        };
        next(err);
    }
}
app.get('/api/:nim/:nama',mymiddleware,function(req,res){
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.send(req.params);
});
app.use((error,req,res,next)=>{
    res.send(error);
});

app.listen(6000,function(){
    console.log("Server run");
})

