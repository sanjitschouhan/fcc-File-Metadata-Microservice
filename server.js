var express = require('express');
var app = express();
var formidable = require('formidable');


app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/getfilesize", function(request, response){
  var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields, files) {
      response.send({size:files.file.size});
      response.end();
    });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
