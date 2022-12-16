import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/core/servicios/libros.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  constructor(private librosService: LibrosService) {}
  libros = [];
  librosMisLibros = [];

  ngOnInit() {
    this.getLibros();
  }
  async getLibros() {
    this.libros = await this.librosService.getLibros();
    console.log(this.libros);
    this.librosMisLibros = this.getLibrosMisLibros();
  }
  getLibrosMisLibros() {
    return this.libros.filter((libro) => libro.milibro === true);
  }
}
