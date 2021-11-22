const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods",
              "GET, POST, PUT, DELETE, OPTIONS");
   res.header("Access-Control-Allow-Credentials", "true");
   next();
});

app.get('/hello',(req,res)=>{
   res.send('Hello World! from server')
});

const movieService = require("./services/movies-service");
movieService(app);
require('./services/tweeter-service')(app);

app.listen(4000);

