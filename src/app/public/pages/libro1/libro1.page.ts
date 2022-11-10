import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { LibrosService } from 'src/app/core/servicios/libros.service';

@Component({
  selector: 'app-libro1',
  templateUrl: './libro1.page.html',
  styleUrls: ['./libro1.page.scss'],
})

export class Libro1Page implements OnInit {
libros: [];
 // id: string;

//  this.id = ActivatedRouteSnapshot.url;
constructor(
    private activatedRoute: ActivatedRoute,
    private librosService: LibrosService
    ){ }
public libroId: number;
//public libroInfo: infoLibro;

  ngOnInit() {
    
    //this.getLibros()[this.id];
    this.activatedRoute.params.subscribe(params =>{
     this.libroId = params['id'];
     console.log(this.libroId);
    }
    )
  }}
    /* this.libroId = params['id'];//obtiene el id de la url
      let libro =
      this.librosService.getInfoLibroPorId(this.libroId);
      if (libro.length > 0) {
        this.libroInfo = libro[0];
      }
    });
    }


   async getLibros() {
    this.libros = await this.librosService.getLibros();
    console.log(this.libros);
    //this.getid();
   // this.getInfoLibro(this.id);
  }


  getInfoLibro(libroId): infoLibro{
  
  return this.libros[id];
  

}


}

export interface infoLibro{
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
*/
