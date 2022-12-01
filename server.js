const express = require('express');
const app = express();
const port= 8081;
const http = require('http');

const server = http.Server(app);

app.use(express.static(__dirname+'/src'));
app.use(express.static(__dirname+'/dist'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname,'/index.html');
});

server.listen(port,()=>{
    console.log(`server run ${port}`);
});


