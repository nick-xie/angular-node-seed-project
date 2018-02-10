// Required Modules
var express = require("express");
var morgan = require("morgan");
var helmet = require("helmet");
var app = express();

var port = process.env.PORT || 3002;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(__dirname + '/app'));

app.get("/", function(req, res) {
    console.log("getting index");
    res.sendFile(__dirname + "/app/index.html");
});

app.get('/app/partials/:name', function(req, res, next) {
     var name = '/app/partials/' + req.params.name;
     console.log('Loaded partial: ' + name);

     res.sendFile(__dirname + name);
});

// All others, let angular do the work
app.get('*', function(req, res) {
   res.sendFile(__dirname + "/app/index.html");
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});
