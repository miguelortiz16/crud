'use strict'
var mongoose=require('mongoose');
// 218
var app=require('./app');
var port=3700;

///////////////
mongoose.set('useFindAndModify', false);





mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/usuarios',{ useNewUrlParser:true, useUnifiedTopology: true })
.then(()=>{
    console.log("conexion a base de datos  establecida con exito")

//creacion del servidor  218
app.listen(port,()=>{
    console.log("servidor corriendo en la url : localhost:3700");
})
})
.catch(err=>console.log(err));