import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from 'src/app/core/servicios/libros.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReviewService } from 'src/app/core/servicios/review.service';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-libro1',
  templateUrl: './libro1.page.html',
  styleUrls: ['./libro1.page.scss'],
})
export class Libro1Page implements OnInit {
  public respuesta: any = [];
  public comentarios: any = [];
  comentarioText: string;
  public form: FormGroup;
  formBuilder: any;
  public colorBoton: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private librosService: LibrosService,
    private fb: FormBuilder,
    private ReviewService: ReviewService,
    private datePipe: DatePipe,
    private http: HttpClient
  ) {}

  libros = [];

  usuarios = [];

  libro: Libro = {
    id: 0,
    autor: '',
    fechaPublicacion: new Date(),
    genero: '',
    isbn: '',
    paginas: 0,
    rating: 0,
    review: '',
    titulo: '',
    descripcion: '',
    imagen: '',
    milibro: false,
  };

  public libroId: number;
  public formattedDate;
  estrellas: any[] = [];
  public textoBoton = '';
  date: Date = this.libro.fechaPublicacion;

  ngOnInit() {
    this.getLibroPorId();
    this.cambiarFormatoFecha();
  }

  async getLibroPorId() {
    this.libros = await this.librosService.getLibros();
    this.activatedRoute.params.subscribe((params) => {
      this.libroId = params['id'];
    });
    this.libro = this.libros.find((libro: Libro) => libro.id == this.libroId);
    // muestra la cantidad de estrellas correspondientes segun el rating que saca de la base de datos
    this.estrellas = new Array(Math.round(this.libro.rating));
    //cambia el boton segun la info que obtiene de la base de datos
    if (this.libro.milibro) {
      this.textoBoton = 'Ya agregado ✓';
      this.colorBoton = { 'background-color': '#FFFFFF', color: '#488bff' };
    } else {
      this.textoBoton = 'Agregar a mis libros';
      this.colorBoton = { 'background-color': '#488bff', color: '#ffffff' };
    }
  }

  public cambiarFormatoFecha(): void {
    this.formattedDate = this.datePipe.transform(this.date, 'MM/dd/yyyy');
  }

  public cambiarBoton() {
    console.log('antes de cambiar valor:', this.libro.milibro);
    this.http
      .put('http://localhost:8080/libro', {
        id: this.libro.id, // Replace with the ID of the boolean value you want to update
        value: this.libro.milibro, // Replace with the new value for the boolean field
      })
      .subscribe((response) => {
        this.libro.milibro = !this.libro.milibro;
        // Handle the response from the server
        console.log('despues de cambiar valor:', this.libro.milibro);
      });

    if (this.libro.milibro) {
      this.textoBoton = 'Ya agregado ✓';
      this.colorBoton = { 'background-color': '#FFFFFF', color: '#488bff' };
    } else {
      this.textoBoton = 'Agregar a mis libros';
      this.colorBoton = { 'background-color': '#488bff', color: '#ffffff' };
    }
  }
}

export interface Libro {
  id: number;
  autor: string;
  fechaPublicacion: Date;
  genero: string;
  isbn: string;
  paginas: number;
  rating: number;
  review: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  milibro: boolean;
}
