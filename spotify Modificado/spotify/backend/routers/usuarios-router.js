var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');
//ruta relacionada a artistas
//gestionar todas las peticiones

router.get('/',function(req,res){
    //.then() es una funcion asincrona que retorna una promesa
    //crearemos una funcion que retornara el resultado
    //req = request = pedido , res = response = respuesta
    //en el metodo find() en el primer parametro son los filtros y el segundoparametro son los metodos que queremos
    usuario.find({},{_id: true, nombreUsuario:true})
    .then(result=>{
        //enviaremos la informacion de todos los usuarios
        res.send(result); 
        res.end();    
    })
    .catch(error=>{
        res.send(error); 
        res.end();
    });
});
//obtener listado de las playlist y sus canciones de un usuario
router.get('/:idUsuario/playlists/:idPlaylist',function (req, res){
    usuario.find(
        {
            _id:req.params.idUsuario,
            "playlists._id": mongoose.Types.ObjectId(req.params.idPlaylist)
        },
        {"playlists.$":true})
    .then(result=>{
        //enviaremos la informacion de todos los usuarios
        res.send(result[0]); 
        res.end();    
    })
    .catch(error=>{
        res.send(error); 
        res.end();
    });
    //res.send(`Obtener la playlist ${req.params.idPlaylist} del usuario ${req.params.idUsuario}`);
    //res.end();


});
//Obtener listado de las playlist
router.get('/:idUsuario/playlists',function (req, res){
    
    usuario.find(
        {
            //http://localhost:8888/usuarios/64b1922693a297c0bcedb6f0
            //filtramos el usuario
            _id:req.params.idUsuario
        },
        {
            //http://localhost:8888/usuarios/64b1922693a297c0bcedb6f0/playlists
            playlists:true
        
        })
    .then(result=>{
        //enviaremos la informacion de todos los usuarios
        res.send(result[0]); 
        res.end();    
    })
    .catch(error=>{
        res.send(error); 
        res.end();
    });

});

//guardar cancion en playlist
router.post('/:idUsuario/playlists/:idPlaylist/canciones', function (req, res){
    usuario.updateOne(
        //primero indicamos el usuario que vamos a actualizar(filtro)
        {   //Acceder al object desde nodeJs no se puede directamente
            _id:    mongoose.Types.ObjectId(req.params.idUsuario),
            "playlists._id":mongoose.Types.ObjectId(req.params.idPlaylist)  
        },
        {   //modificador se utilzia para anezar un elemento  un arreglo
            $push:{
                "playlists.$.canciones":{
                    //ponemos los datos que deberia tener del arreglo   
                    nombreCancion: req.body.nombreCancion,
                    artista: req.body.artista,
                    album:req.body.album
                                
                }
            }
        }   
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();

    });
});

//Crear un nuevo playlist

router.post('/:idUsuario/playlists', function (req, res){
    usuario.updateOne(
        //primero indicamos el usuario que vamos a actualizar(filtro)
        {   //Acceder al object desde nodeJs no se puede directamente
            _id:    mongoose.Types.ObjectId(req.params.idUsuario)
        },
        {   //modificador se utilzia para anezar un elemento  un arreglo
            $push:{
                playlists:{
                    //ponemos los datos que deberia tener del arreglo   
                    _id: mongoose.Types.ObjectId(),
                    tituloPlaylist:req.body.tituloPlaylist,
                    canciones:[] // agregamos el atributo con un arreglo vacio
    
                }
            }
        }   
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();

    });
});


module.exports=router;