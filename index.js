const express = require('express');
const app = express();
const port = 1278;

//GET
app.get('/greetings',(request, response) =>{
    return response.send("Hello Gabriella Angel!")
});

///list of friends

let friends = [{"id": 1,"name":"Mama"},
    {"id":1,"name":"Danny"},
    {"id":1,"name":"Hassan"},
    {"id":1,"name":"Husein"},
    {"id":1,"name":"Daddy"}];
app.get('/list-of-friends', (request,response) =>{
    return response.send(friends)

});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});