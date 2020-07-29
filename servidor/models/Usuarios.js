var  mongoose = require('mongoose');

var Schema=mongoose.Schema;
var usuarioSchema=Schema({
    nombre:String,
    apellido:String,
    correo:String,
    telefono:Number,
    direccion:String

});
module.exports=mongoose.model(
    'usuarios',usuarioSchema
);