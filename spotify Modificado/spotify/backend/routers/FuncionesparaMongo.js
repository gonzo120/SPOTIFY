// agregar un playlist

//actualizaremos el usuario que vamos a modificar
db.usuarios.updateOne(
    //primero indicamos el usuario que vamos a actualizar(filtro)
    {
        _id:ObjectId('64b02b8ab052f0081f6f5d02')
    },
    {   //modificador se utilzia para anezar un elemento  un arreglo
        $push:{
            playlists:{
                //ponemos los datos que deberia tener del arreglo   
                _id: ObjectId(),
                tituloPlaylist:"Nueva Playlist de prueba",
                canciones:[] // agregamos el atributo con un arreglo vacio

            }
        }
    }   
)

db.usuarios.updateOne(
    //primero indicamos el usuario que vamos a actualizar(filtro)
    {
        _id: ObjectId('664b02b8ab052f0081f6f5d01')
    },
    {   //modificador se utilzia para anezar un elemento  un arreglo
        $push: {
            playlists: {
                //ponemos los datos que deberia tener del arreglo   
                _id: ObjectId(),
                tituloPlaylist: "Nueva Playlist de prueba",
                canciones: [] // agregamos el atributo con un arreglo vacio
            }
        }
    }   
)



db.usuarios.updateOne(
    //primero indicamos el usuario que vamos a actualizar(filtro)
    {
        _id:ObjectId('64b02b8ab052f0081f6f5d02'),
        "playlists._id":ObjectId('64b02b8ab052f0081f6f5cfd'),
        
    },
    {   //modificador se utilzia para anezar un elemento  un arreglo
        $push:{
            canciones:{
                //ponemos los datos que deberia tener del arreglo   
                nombreCancion:"Nelson",
                artista:"Nelson",
                album:"Nelson"
                            
            }
        }
    }   
)