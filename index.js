const express = require('express');
const app = express();

const PORT = process.env.PORT || 3030;

app.set("view engine", "ejs");
  
  
app.get('/' , (req , res)=>{
    res.render("index");
})

app.get('/' , (req , res)=>{
    res.render("home");
})

app.get('/about' , (req , res)=>{
    res.render("about");
})

app.get('/contact' , (req , res)=>{
    res.render("contact");
})

app.get('/adress' , (req , res)=>{
    res.render("adress");
})

app.get('/help' , (req , res)=>{
    res.render("help");
})


  
app.listen(PORT, ()=>{
    console.log("Server is running on port 5500");
})
