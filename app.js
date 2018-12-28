var express = require('express');
var todocontroller = require('./controllers/todoController');
var app=express();
app.set('view engine','ejs');
app.use(express.static('./public'));
todocontroller(app);


app.listen(3053);
console.log("u r listing to port 3053");
