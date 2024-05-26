const express = require('express');
const app = express();
require("dotenv").config()

const Port=process.env.PORT|3003;
// middleware
app.use(function(req,res,next){
    console.log("middleware Working");
  next();  
})

app.set('view engine','ejs')
app.use(express.static('./public'));

app.get('/', function (req, res) {
    console.log("server started");
    res.render('index',{name:'Suyash Singh'});
  })
  
app.get('/profile/:username', function (req, res) {
  res.send(`Hello ${req.params.username}`);
})

app.get('/contact', function (req, res) {
   res.send('<h1>Hello this is Contact Page.</h1>');
})
app.get('/error', function (req, res,next) {
    // res.render('error',{error:'erorr'});
    throw Error("Something Went Wrong");
 })
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
});

app.listen(Port,()=>{
  console.log("server started at ",Port);
})