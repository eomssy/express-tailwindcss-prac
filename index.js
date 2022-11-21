const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/dist'));



app.get('/',function(req,res){
    res.sendFile(__dirname+'public/index.html');
});

app.listen(7600,()=>{
    console.log("server run");
})