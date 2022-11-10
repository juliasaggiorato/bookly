import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from 'src/app/core/servicios/libros.service';

@Component({
  selector: 'app-libro1',
  templateUrl: './libro1.page.html',
  styleUrls: ['./libro1.page.scss'],
})

export class Libro1Page implements OnInit {

constructor(
    private activatedRoute: ActivatedRoute,
    private librosService: LibrosService
    ){ }
libros=[];
libro: Libro;
public libroId: number;

  ngOnInit() {
    this.getLibroPorId();
  }
  
  async getLibroPorId() {
      this.libros = await this.librosService.getLibros();
     this.activatedRoute.params.subscribe(params =>{
     this.libroId = params['id'];
    }
    )
      this.libro = this.libros[this.libroId -1];
    }
   
  }

export interface Libro{
  id: number;
  autor: string;
  fechaPublicacion: Date;
  genero: string;
  isbn: string;
  paginas: number;
  rating: number;
  review:string;
  titulo:string;
  descripcion:string;
  imagen: string;
  milibro: boolean;   

}
