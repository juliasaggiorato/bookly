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
  librosRomance: libro = [];
  librosAutoayuda = [];
  ngOnInit() {
    this.getLibros();
    
  }
  async getLibros() {
    this.libros = await this.librosService.getLibros();
    console.log(this.libros);
    this.librosRomance =  this.getLibrosGenero("Romance");
    this.librosAutoayuda =  this.getLibrosGenero("Autoayuda");
  }

  getLibrosGenero(genero : string){
  return this.libros.filter((libro)=>libro.genero === genero);
  

}

}
            