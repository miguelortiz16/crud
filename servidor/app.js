'use strict '
var express=require('express');
var bodyParser=require('body-parser');
var usuario_routes=require('./rutes/usuarios.js');


var app=express();
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());


//rutas
app.get('/test',(req,res)=>{
    res.status(200).send({
        message:"hola"

    })
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use('/api',usuario_routes);

module.exports=app;

