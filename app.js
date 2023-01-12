const express = require("express");
const app = express();
app.use(express.urlencoded());
app.use(express.static("public"));
app.set('view engine','ejs');

var items = ["Buy food","Cook food","Eat food"];
var workItems = [];

app.get("/", function(req,res){
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US",options);
    res.render("list",{ListTitle: day, newListItems: items});
})

app.get("/work",function(req,res){
    res.render("list",{ListTitle: "Work List", newListItems: workItems})
})

app.get("/about", function(req,res){
    res.render("about");
})

app.post("/",function(req,res){
    let item = req.body.newItem;
    if(req.body.list == "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/")
    }
})

app.listen(3000, function(){
    console.log("Server started running at 3000.")
})