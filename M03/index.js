var express = require("express");
var server = express();

var logger = require("morgan");
server.use(logger("dev"));
server.use(express.static(__dirname + "/publik"));
server.listen(4000,function(){
    console.log("Server run");
})
app.get("/api/cari", function(req,res,next){
    var nama = req.query.nama;
    var nim = req.query.nim;
    console.log('Nama : ${nama}');
    console.log('nim : ${nim}');
    res.send(nim);
});
