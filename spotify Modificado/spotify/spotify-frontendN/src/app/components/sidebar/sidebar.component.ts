import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistasService } from 'src/app/services/artistas.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  @Output() onVerArtistas = new EventEmitter();
  @Output() onVerPlaylists = new EventEmitter();
  //inyectamos el servicio del metodo
  regionVisible:string = '';
  constructor( public ArtistasService: ArtistasService) {


  }
  ngOnInit(): void {
   this.ArtistasService.obtenerArtistas();   
  }
  public verArtista(id:Number){
   // this.regionVisible = 'artistas';
   this.onVerArtistas.emit(id)
   console.log('ver artista con ID: ' + id)
  }
  verPlaylist(id:Number){
    this.onVerPlaylists.emit(id)
    // this.regionVisible = 'playlists';
  }
}
