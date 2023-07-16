var express = require('express');
var router = express.Router();
var artista = require('../models/artista');
var mongoose = require('mongoose');
//ruta relacionada a artistas
//gestionar todas las peticiones

router.get('/',function(req,res){

    artista.find({},{_id: true, nombreArtista:true})
    .then(result=>{
        //enviaremos la informacion de todos los artistas
        res.send(result); 
        res.end();    
    })
    .catch(error=>{
        res.send(error); 
        res.end();
    });

});
//La idea es obtener url entendibles
//obtener albunes y canciones
//http://localhost:888/artistas/1/albumes
router.get('/:id/albumes',function(req,res){

    artista.find(
        {
            _id:req.params.id
        },
        {"albumes":true})
    .then(result=>{
        //enviaremos la informacion de todos los artistas
        res.send(result[0]); 
        res.end();    
    })
    .catch(error=>{
        res.send(error); 
        res.end();
    });
    //req.params.id trae el numero que se le coloque en la url

});



/* 
Artistas
Lsitar artistas
Obtener albumes y canciones
*/

module.exports=router;