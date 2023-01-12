const express = require("express");
const app = express();
app.use(express.urlencoded());
app.use(express.static("public"));
app.set('view engine','ejs');

var items = ["Buy food","Cook food","Eat food"];

app.get("/", function(req,res){
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US",options);
    res.render("list",{day: day, newListItems: items});
})

app.post("/",function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Server started running at 3000.")
})