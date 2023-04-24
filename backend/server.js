//server intantiate
const express = require('express');
// const req = require('express/lib/request');
const app = express();

// activat the server on 3000 port:-
app.listen(3000, () => {
    console.log("Server started at port no.3000");
});


// create body parser for passing massage

// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// Routing create:-

app.get('/' , (respons,request) => {
    respons.send("kasa ho sara bacho");
});

// app.post("/api/cars" ,(req,tes) => {
//     const {name,brand} = req.body;
//     console.log(name);
//     console.log(brand);
//     console.log("Succesfully submited car");
// });