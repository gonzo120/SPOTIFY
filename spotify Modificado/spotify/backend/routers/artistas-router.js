var express = require('express');
var router = express.Router();
//ruta relacionada a artistas
//gestionar todas las peticiones

router.get('/',function(req,res){


    res.send('Obtener artistas');
    res.end()

});
//La idea es obtener url entendibles
//http://localhost:888/artistas/1/albumes
router.get('/:id/albumes',function(req,res){

    res.send('Obtener albumes del artista'+req.params.id);
    res.end();
    //req.params.id trae el numero que se le coloque en la url

});
//obtener albunes y canciones


/* 
Artistas
Lsitar artistas
Obtener albumes y canciones
*/

module.exports=router;