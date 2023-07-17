import { Component } from '@angular/core';
import { faMusic } from'@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify-frontendN';
  public faMusic = faMusic;
  regionVisible:string = '';

  public verArtista(id:number){
    this.regionVisible = 'artistas';
  }
  verPlaylist(id:number){
    this.regionVisible = 'playlists';
    console.log('ver playlists' + id );
  }
}
