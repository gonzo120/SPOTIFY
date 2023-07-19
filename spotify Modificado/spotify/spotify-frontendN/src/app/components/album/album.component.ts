import { Component, EventEmitter, OnInit, Output } from '@angular/core'; 
import { ArtistasService } from 'src/app/services/artistas.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{
  @Output () onAgregarCancion = new EventEmitter;
  public DataAlbumes: any[] = [];

  artistaActual: any[] = [];
  idUsuarioSeleccionado: string = "";
  Playlists: any [] = [];
  playlistSeleccionado: any[]=[];
  albumSeleccionado: string ="";
  cancionSeleccionada: any []= [];

  constructor(
    private modalService:NgbModal, 
    public ArtistasService: ArtistasService,
    public usuariosService: UsuariosService,
    private sanitizer: DomSanitizer
    ){  }
  ngOnInit(): void {
      
  }

  guardarCancionPlaylist(){ 
    const data ={
      idUsuario: this.idUsuarioSeleccionado,
      idPlaylists: this.playlistSeleccionado,
      nombreartista: this.artistaActual,
      cancion: this.cancionSeleccionada,
      nombrealbum: this.albumSeleccionado
    }
    console.log('informacion necesaria para guardar cancion a playlists', data.nombreartista   )
    this.usuariosService.guardarCancionPlaylist(data, this.artistaActual )
    .subscribe(
      res=>{
        console.log(res);
        if (res.ok ===1){
          this.modalService.dismissAll();
          this.onAgregarCancion.emit(this.idUsuarioSeleccionado);
        }
      }, error =>console.error(error)
    );
  }

  agregarAPlaylist(modalGuardarEnPlaylist:any, cancion:any, nombreAlbum:any){
    this.cancionSeleccionada = cancion;
    this.albumSeleccionado = nombreAlbum;
    this.usuariosService.obtenerPlaylistsUsuario(this.idUsuarioSeleccionado)
    .subscribe(
      res=>{  
        this.Playlists = res.playlists;

        console.log('playlists', this.Playlists);
        console.log('Agregar cancion a playlist', cancion);
        this.modalService.open(
        modalGuardarEnPlaylist,{
        size:'xs',
        centered:false
      });
      },
      erro=>console.log(erro)
    );
    
  }
  public obtenerAlbumes(artista:any){


    console.log('Obtener albumes desde el componente Album', artista.idArtista);
    //obtenerPlaylistsUsuario este metodo devuelve un observable para 
    // saber cuando me respondio un servidor
    this.artistaActual = this.ArtistasService.dataartistas.find((a: any) => a._id === artista.idArtista)?.nombreArtista;
    console.log('datos de artistaActual',this.artistaActual);

    this.ArtistasService.obtenerAlbumes(artista.idArtista).subscribe((res:any)=>
    { 
      this.DataAlbumes = res.albumes;
      console.log('Albumes desde album component:',  this.DataAlbumes);
    },
    (error:any)=> console.log(error)
    );
  }
  obtenerURL(imagen:any){
    return this.sanitizer.bypassSecurityTrustStyle(`url(../assets/${imagen})`);
  }
}
