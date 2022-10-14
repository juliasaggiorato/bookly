import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro1',
  templateUrl: './libro1.page.html',
  styleUrls: ['./libro1.page.scss'],
})
export class Libro1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  libro = {
    titulo: 'Una Corte de Rosas y Espinas',
    discripcion: 'Feyre está desesperada, su vida y la de su familia dependen de ella.    Enfrentada al hambre más absoluto, no dudará en ir al bosque prohibido y    matar si es necesario. Pero su osadía la convierte en prisionera del    misterioso Tamlin, quien a pesar de su aparente frialdad la hará descubrir    una ardiente pasión que marcará su destino. Lejos de su familia y su mundo,    Feyre tendrá que tomar una decisión capital para salvar todo lo que ama.' 
  }

}
