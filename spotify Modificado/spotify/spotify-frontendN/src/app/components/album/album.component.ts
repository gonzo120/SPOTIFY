import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{
  constructor(private modalService:NgbModal){

  }
  ngOnInit(): void {
      
  }

  guardarCancionPlaylist(){

  }

  agregarAPlaylist(modalGuardarEnPlaylist:any){
    this.modalService.open(
      modalGuardarEnPlaylist,{
        size:'xs',
        centered:false
      });
  }
}
