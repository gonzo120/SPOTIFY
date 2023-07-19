import { Component, ViewChild } from '@angular/core';
import { faMusic } from'@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AlbumComponent } from './components/album/album.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //sidebarcomponent me permitira ingresar a los metodos del componente SidebarComponent
  //ya se puede ingresar al objeto desde la clase
  @ViewChild('sidebar') sidebarComponent:any = SidebarComponent;
  @ViewChild('playlist') playlistComponent:any = PlaylistComponent;
  @ViewChild('album') albumComponent:any = AlbumComponent;
  title = 'spotify-frontendN';
  public faMusic = faMusic;
  regionVisible:string = '';

  public verArtista(id:any){
    this.regionVisible = 'artistas';
    this.albumComponent.obtenerAlbumes(id);
  }
  public verPlaylist(playlists :any){
    //agregamos el metodo view y se lo agregamos en esta funcion
    this.playlistComponent.verplaylist(playlists);
    this.regionVisible = 'playlists';
    console.log('ver playlists' , playlists);
  }
  public seleccionarUsuario(usuario:any){
    console.log('Usuario seleccionado (Appcomponent', usuario);
    this.sidebarComponent.obtenerPlaylists(usuario);
    this.albumComponent.idUsuarioSeleccionado = usuario;
  }

  recargarPlaylists(idUsuario:any){
    this.sidebarComponent.obtenerPlaylists(idUsuario);
  }
}
