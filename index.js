 var fs = require('fs');
 var pdf = require('html-pdf');
 var path = require('path');
 var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');
 app.use( bodyParser.json() );       // to support JSON-encoded bodies
 app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
     extended: true
 }));
 //var html = fs.readFileSync('example.html', 'utf8');
 // var options = { format: 'A4',orientation: 'portrait' };
 app.post('/', function (sReq, sRes) {
     var html = sReq.body.html;
     var options = sReq.body.options;
     var rute = sReq.body.rute;
     file = path.join(__dirname, rute);

     pdf.create(html, options).toFile(file,function(err, res) {
         if (err) return console.log(err);
         pdf.filename = file;
         console.log(res); // { filename: '/tmp/html-pdf-8ymPV.pdf' }
         sRes.send(res.filename);
     });
     //console.log(req)
 });

 var server = app.listen(3000, function () {
     var port = server.address().port;
     console.log('Example app listening at http://0.0.0.0:'+port);
 });