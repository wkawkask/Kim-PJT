const express = require("express");

const app = express();
const http = require('http').createServer(app);


const root   = require('./routes/index');



//build path 
app.use(express.static( buildDirpath ));



//request dir
app.use('/',root);






//start server
http.listen(3001,() => console.log("node server running"));


