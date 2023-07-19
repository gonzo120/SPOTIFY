import { Component, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //decorador
  @Output() onSeleccionarUsuario = new EventEmitter();
  @Output() onGuardarPlaylist = new EventEmitter();


  usuarioSeleccionado:any;
  nombrePlaylists: string ='';

  constructor(private modalService:NgbModal, public UsuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.UsuariosService.obtenerUsuarios(); 
    
  }
  guardarPlaylist(){
    this.UsuariosService.guardarPlaylist(
    
    this.usuarioSeleccionado,
    this.nombrePlaylists,
    ).subscribe(
      res=>{
        console.log(res);
        if(res.ok===1){
          this.modalService.dismissAll();
          this.onGuardarPlaylist.emit(this.usuarioSeleccionado);
        }
        
      },error=>console.log(error)
    );
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
    this.modalService.dismissAll();
    console.log(this.usuarioSeleccionado);
    this.onSeleccionarUsuario.emit(this.usuarioSeleccionado);
  // envia la informacion el usuario seleccionado
    //al componente AppComponent al
  }

}
