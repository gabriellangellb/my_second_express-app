const express = require('express');
const app = express();
const port = 1256;

//GET
app.get('/greetings',(request, response) =>{
    return response.send("Hello Gabriella Angel!")
});

///list of friends

let friends1 = [{"id": 1,"name":"Mama"},
    {"id":1,"name":"Danny"},
    {"id":2,"name":"Hassan"},
    {"id":3,"name":"Hussein"},
    {"id":4,"name":"Daddy"}];
app.get('/list-of-friends1', (request,response) =>{
    return response.send(friends1)

});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});