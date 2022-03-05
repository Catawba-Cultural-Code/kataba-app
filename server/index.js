const express = require('express');
let app = express();
let API = require('./api');
let db = require('./cms');
const isDevMode = process.env.NODE_ENV === 'dev';

if(isDevMode) {
  app.use(express.static(__dirname + '/../app/web-build'));
} else {
  console.log('Production mode');
  //TODO: Serve the production build (where to serve from?)
}
let port = 8080;

// app.post('/endpoint', (req,res) => {

// })


// app.post('/endpoint', (req, res) => {
// })

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

