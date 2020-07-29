'use strict'
var express=require('express');
var usuarioController=require('../controllers/usuario');
var router=express.Router();


router.get('/home',usuarioController.home);
router.post('/test',usuarioController.test);
//rotas
router.post('/save-usuario',usuarioController.saveUsuario);

router.get('/usuario/:id?',usuarioController.getUsuario);
router.get('/usuarios',usuarioController.getUsuarios);

router.put('/usuario/:id',usuarioController.updateUsuario);
router.delete('/usuario/:id',usuarioController.deleteUsuario);

module.exports=router;
