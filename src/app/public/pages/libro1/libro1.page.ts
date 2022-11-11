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
libro: Libro = {
  id: 0,
  autor: '',
  fechaPublicacion:new Date() ,
  genero: '',
  isbn: '',
  paginas: 0,
  rating: 0,
  review:'',
  titulo:'',
  descripcion:'',
  imagen: '',
  milibro: false 
}
public libroId: number;
estrellas:any[] = [];

  ngOnInit() {
    this.getLibroPorId();
  }
  
  async getLibroPorId() {
      this.libros = await this.librosService.getLibros();
     this.activatedRoute.params.subscribe(params =>{
     this.libroId = params['id'];
    }
    )
      this.libro = this.libros.find((libro:Libro) => libro.id == this.libroId);
      this.estrellas = new Array(Math.round(this.libro.rating))
      console.log(this.libro,this.estrellas)
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
