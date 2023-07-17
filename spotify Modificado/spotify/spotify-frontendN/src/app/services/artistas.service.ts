import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {
  public dataartistas: any[] = [];
  //inyectamos el metodo http 
  constructor(private httpClient:HttpClient) { 
    this.obtenerArtistas();
  }
  //Metodo
   public obtenerArtistas(){
    //accedemos al modulo
    this.httpClient.get('http://localhost:8888/artistas',{}).subscribe((resp:any) => {
      this.dataartistas = resp;
      console.log(resp);
      console.log('funciona obtenerArtistas');
    });
    
  }
}
