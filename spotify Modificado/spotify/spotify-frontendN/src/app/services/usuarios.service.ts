import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumComponent } from '../components/album/album.component';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public dataUsuarios: any[] = [];
  public dataPlaylists: any [] = [];
  artistaActual2: any[] = [];
  //inyectamos el metodo http 
  constructor(private httpClient:HttpClient) { 
    this.obtenerUsuarios();
    
  }
  //Metodo
   public obtenerUsuarios(){
    //accedemos al modulo
    this.httpClient.get('http://localhost:8888/usuarios',{}).subscribe((resp:any) => {
      this.dataUsuarios = resp;
      console.log(resp);
      console.log('funciona obtenerUsuarios');
    });
    
  }

  obtenerPlaylistsUsuario(usuario:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/usuarios/${usuario}/playlists`,{});
  }
  guardarCancionPlaylist(data:any, artistaActual:any):Observable<any> {
    return this.httpClient.post(
      `http://localhost:8888/usuarios/${data.idUsuario}/playlists/${data.idPlaylists}/canciones`,
      {
        nombreCancion:data.cancion.nombreCancion,
        
        artista: artistaActual,
        album :data.nombrealbum
      });
  }
  guardarPlaylist(idUsuario:any,nombrePlaylist:any ):Observable<any> {
    return this.httpClient.post(
      `http://localhost:8888/usuarios/${idUsuario}/playlists`,
      {
        tituloPlaylist:nombrePlaylist
      });
  }
  
}


