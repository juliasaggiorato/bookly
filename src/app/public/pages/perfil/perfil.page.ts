import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
/* 
export class PerfilPage implements OnInit {
  constructor(private librosService: LibrosService) {}
  misLibros = [];
  ngOnInit() {
    this.getLibros();
  }
  async getLibros() {
    this.misLibros = await *ngIf= "libros.milibro=1" this.librosService.getLibros();
    console.log(this.misLibros);
  }
}
*/
