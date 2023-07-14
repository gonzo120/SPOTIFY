var express = require('express');
var router = express.Router();
//ruta relacionada a artistas
//gestionar todas las peticiones

router.get('/',function(req,res){

    res.send('Obtener todos los usuarios');

});
//obtener listado de las playlist
router.get('/:idUsuario/playlists/:idPlaylist',function (req, res){

    res.send(`Obtener la playlist ${req.params.idPlaylist} del usuario ${req.params.idUsuario}`);
    res.end();


});
router.get('/:idUsuario/playlists',function (req, res){

    res.send(`Obtener ltodas las playlist del usuario ${req.params.idUsuario}`);
    res.end();

});

//guardar cancion en playlist
router.post('/:idUsuario/playlists/:idPlaylist/canciones', function (req, res){
    res.send(`Guardar una canción a la playlist ${req.params.idPlaylist} del usuario ${req.params.idUsuario}`);
    res.end();
});

//Crear un nuevo playlist
router.post('/:idUsuario/playlists', function (req, res){
    res.send(`Guardar un nuevo playlist el usuario ${req.params.idUsuario}`);
    res.end();
});


module.exports=router;