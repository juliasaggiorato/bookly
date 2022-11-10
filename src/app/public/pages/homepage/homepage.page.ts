import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/core/servicios/libros.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  constructor(private librosService: LibrosService) {}
  libros = [];
  librosRomance = [];
  librosAutoayuda = [];
  librosFantasia = [];
  librosDistopia = [];
  librosNinos = [];
  librosClasicos = [];
  librosMisLibros = []; 
  

  ngOnInit() {
    this.getLibros();
    
  }
  async getLibros() {
    this.libros = await this.librosService.getLibros();
    console.log(this.libros);
    this.librosRomance =  this.getLibrosGenero("Romance");
    this.librosAutoayuda =  this.getLibrosGenero("Autoayuda");
    this.librosFantasia = this.getLibrosGenero("Fantasía");
    this.librosDistopia = this.getLibrosGenero("Distopía");
    this.librosNinos = this.getLibrosGenero("Niños");
    this.librosClasicos = this.getLibrosGenero("Clásicos");
    this.librosMisLibros = this.getLibrosMisLibros();
  }

  getLibrosGenero(genero : string){
  return this.libros.filter((libro)=>libro.genero === genero);
  

}
getLibrosMisLibros()
{
  return this.libros.filter((libro)=>libro.milibro === true);
}

}

            