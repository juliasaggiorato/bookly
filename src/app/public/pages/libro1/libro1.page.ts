import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro1',
  templateUrl: './libro1.page.html',
  styleUrls: ['./libro1.page.scss'],
})
export class Libro1Page implements OnInit {
  constructor() {}

  ngOnInit() {

  }

  libro = {
    id: 1,
    titulo: 'Una Corte de Rosas y Espinas',
    autor: 'Sarah J Mass',
    paginas: 459,
    isbn: 9780590353403,
    fechaPublicacion: '01/05/2015',
    rating: 4.1,
    genero: 'fantasía',
    milibro: true,
    descripcion:
      'Feyre está desesperada, su vida y la de su familia dependen de ella.    Enfrentada al hambre más absoluto, no dudará en ir al bosque prohibido y    matar si es necesario. Pero su osadía la convierte en prisionera del    misterioso Tamlin, quien a pesar de su aparente frialdad la hará descubrir    una ardiente pasión que marcará su destino. Lejos de su familia y su mundo,    Feyre tendrá que tomar una decisión capital para salvar todo lo que ama.',
  };
}


export interface libro{
  id: number;
  autor: string;
  fechaPublicacion: Date;
  genero: string;
  isbn: number;
  paginas: number;
  rating: number;
  review:string;
  titulo:string;
  descripcion:string;
  imagen: string;
  milibro: boolean;   

}