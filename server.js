const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require('ejs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.listen(3100, function(){
    console.log("Server has started on port 3100");
});


// *** GET Routes - display pages ***
// Route Route
// Route Route
app.get('/', function (req, res) {
    var name = "Susan Winters";
    var listnames = ["nodeJS", "express", "EJS"];
    // Render index page
    res.render('pages/index', {
        // EJS variable and server-side variable
        name: name,
        listnames: listnames
    });
});