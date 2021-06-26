const http = require("http");

http 
    .createServer(function(req,res){
    
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<H1>module HTTP dan Web</H1><p>181110085-catrinejovita</p>");
    res.end();
                  })
.listen(3400)