const express =require('express');
const app = express();

app.set("view engine", "pug");
//app.set("view engine", "html"); [x]
//html을 그대로 이용하려면 ejs나 consolidate & swig 설치해야함

app.set("views" , __dirname + "/views");

app.get("/", (req,res) => res.render("home"));
//app.get("/*", (req,res) => res.redirect("/"));
app.use("/public",express.static(__dirname + "/public"));
app.listen(3000); 
console.log(`Listening on http://localhost:3000`);