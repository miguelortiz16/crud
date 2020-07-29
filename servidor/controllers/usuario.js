'use strict'



var Usuario=require('../models/usuarios')
var controller={
  
    home:function(req,res){

        return res.status(200).send({
            message:'soy la home'
        });
    },
    test:function (req,res) {
        return res.status(200).send({
            message:"soy el modelo test del controlador"
        });
        
    },
    saveUsuario:function(req,res){
        var usuario=new Usuario();
        var params=req.body;
        usuario.nombre=params.nombre;
        usuario.apellido=params.apellido;
        usuario.telefono=params.telefono;
        usuario.correo=params.correo;
        
        usuario.direccion=params.direccion;

        usuario.save((err,usuarioStrored)=>{
            if(err) return res.status(500).send({
                message:'error al guardar el documento'
            });
            if(!usuarioStrored) return res.status(400).send({
                message:'no se ha podido guardar'
            });
            return res.status(200).send({
                usuario:usuarioStrored
            })
        })
       
    },
    getUsuario: function(req,res){
        var usuarioId=req.params.id;
        if(usuarioId==null)return res.status(404).send({
                message:'el usuarioo no existe'});
        
        
        
        Usuario.findById(usuarioId,(err,usuario)=>{
            if(err) return res.status(500).send({
                message:'error al devolver los datos'
            });
        
            if(!usuario) return res.status(404).send({
            message:'el usuarioo no existe'
        
            });
            return res.status(200).send({
                usuario
            });
        })},
        getUsuarios:function(req,res){
            Usuario.find({}).exec((err,usuarios)=>{
                if(err)return res.status({
                    message:'error al devolver el datos'
                })
                if(!usuarios) return res.status({
                    message:'no hay usuario para mostrar'
                })
                return res.status(200).send({
                    usuarios
                })
            });
        },
        updateUsuario:function(req,res){
            var usuarioId=req.params.id;
            var update=req.body;
            Usuario.findByIdAndUpdate(usuarioId,update,{new:true},(err,usuarioUpDated)=>{
                if(err) return res.status(500),send({
                    message:'error al actualizar'
                });
                if(!usuarioUpDated) return res.status(400).send({message:'no existen el usuario para actualizar'});
                return res.status(200).send({
                    usuario:usuarioUpDated
                })
            })
        },
        deleteUsuario:function(req,res){
            var usuarioId=req.params.id;
        
            Usuario.findByIdAndRemove(usuarioId,(err,usuarioRemoved)=>{
                if(err) return res.status(500).send({message:'no se ha podido borrar el usuario'});
        
                if(!usuarioRemoved) return res.status(404).send({message:'no se puede eliminar ese usuario'});
        
                return res.status(200).send({
                    usuario:usuarioRemoved
                })
                
            })
        
        },

        
        
        
         };
        
        
        
       

module.exports=controller;