import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistasService } from 'src/app/services/artistas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  @Output() onVerArtistas = new EventEmitter();
  @Output() onVerPlaylists = new EventEmitter();
  public dataPlaylists: any [] = [];
  //inyectamos el servicio del metodo
  regionVisible:string = '';
  constructor( public ArtistasService: ArtistasService, public usuariosService:UsuariosService) {


  }
  ngOnInit(): void {
   this.ArtistasService.obtenerArtistas();   
  }
  public verArtista(id:any){
   // this.regionVisible = 'artistas';
   this.onVerArtistas.emit({idArtista :id, nombreArtista: id.nombreArtista});
   console.log('ver artista con ID: ', id)
    
  }
  public verPlaylist(playlists:any){
    this.onVerPlaylists.emit(playlists);
    // this.regionVisible = 'playlists';
  }

  // vamos a identificar quien es el usuario
  // @viewchild ejecuta desde el componente patre appcomponent a un componente hijo sidebar
  
  public obtenerPlaylists(usuario:any){

    
    console.log('Obtener las playlist del usuario', usuario);
    //obtenerPlaylistsUsuario este metodo devuelve un observable para 
    // saber cuando me respondio un servidor
    this.dataPlaylists=[];
    this.usuariosService.obtenerPlaylistsUsuario(usuario).subscribe((res:any)=>
    { 
      this.dataPlaylists = res.playlists;
      console.log('Playlists', res);
    },
    (error:any)=> console.log(error)
    );
  }

}
