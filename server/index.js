var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


const PORT = 3001; 

app.listen(PORT, function() {
  console.log(`listening on port ${PORT} !`);
});
