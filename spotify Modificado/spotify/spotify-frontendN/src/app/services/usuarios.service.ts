import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public dataUsuarios: any[] = [];
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
}
