const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render("index.html");
});

app.get("/data", function(req,res){
  res.render("data.ejs");
});

app.post("/man", function(req,res){
  man.push(req.body.checkM.length);

  res.render('data.ejs', {dataMan: man, dataWoman: woman});
});

app.post("/woman", function(req,res){
  woman.push(req.body.checkW.length);

  res.render('data.ejs', {dataMan: man, dataWoman: woman});
});

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

//*************************************************** */
let man = [];
let woman = [];


