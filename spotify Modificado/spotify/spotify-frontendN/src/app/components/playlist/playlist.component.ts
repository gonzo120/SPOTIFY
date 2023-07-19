import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlists:any={};
 constructor(){

 }
 ngOnInit(): void {
     
 }
 //aqui recibiremos el playlists
 verplaylist(playlists:any){
  this.playlists = playlists;
  console.log('Ver desde Playlistscomponent ', playlists)

 }
}
