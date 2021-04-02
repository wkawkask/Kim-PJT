const express = require("express");
const app   = express();
const root   = require('./routes/index');

app.use('/',root);

app.listen(3001,() => console.log("node server running"));



