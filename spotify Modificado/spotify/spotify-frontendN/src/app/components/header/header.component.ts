import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  usuarioSeleccionado:any;

  constructor(private modalService:NgbModal, public UsuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.UsuariosService.obtenerUsuarios(); 
  }
  guardarPlaylist(){

  }
  abrirNuevaPlaylist(modal:any){
    this.modalService.open(
      modal,{
        size:'xs',
        centered:false
      })
  }
  abrirModalUsuarios(modal:any){
    this.modalService.open(
      modal,{
        size:'xs',
        centered:false

      })
  }
  seleccionarUsuario(){
    console.log(this.usuarioSeleccionado);
  }
}
