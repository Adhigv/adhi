const express = require('express');
const app =express();

app.get('/gagan',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.listen(4000,()=>{
    console.log("listening to port 4000");
});