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

  public comentario: Comentario = {
    id: 0,
    usuario: '',
    tituloLibro: '',
    idLibro: 0,
    comentario: '',
  };

  public libroId: number;
  public formattedDate;
  estrellas: any[] = [];
  public textoBoton = '';
  date: Date = this.libro.fechaPublicacion;

  ngOnInit() {
    this.getLibroPorId();
    this.cambiarFormatoFecha();
    this.cargarComentarios();

    this.form = this.fb.group({
      textAreaComentario: [''],
    });
  }

  async getLibroPorId() {
    this.libros = await this.librosService.getLibros();
    this.activatedRoute.params.subscribe((params) => {
      this.libroId = params['id'];
    });
    this.libro = this.libros.find((libro: Libro) => libro.id == this.libroId);
    this.estrellas = new Array(Math.round(this.libro.rating));
    this.cambiarBoton();
  }

  public cambiarFormatoFecha(): void {
    this.formattedDate = this.datePipe.transform(this.date, 'MM/dd/yyyy');
  }

  public agregarMisLibros() {
    console.log('antes de cambiar valor:', this.libro.milibro);
    this.http
      .post('http://localhost:8080/libro', {
        id: this.libro.id,
        autor: this.libro.autor,
        fechaPublicacion: this.libro.fechaPublicacion,
        genero: this.libro.genero,
        isbn: this.libro.isbn,
        paginas: this.libro.paginas,
        rating: this.libro.rating,
        review: this.libro.review,
        titulo: this.libro.titulo,
        descripcion: this.libro.descripcion,
        imagen: this.libro.imagen,
        milibro: !this.libro.milibro,
      })

      .subscribe((response) => {
        this.libro.milibro = !this.libro.milibro;
        console.log('despues de cambiar valor:', this.libro.milibro);
        this.cambiarBoton();
      });
  }

  async cambiarBoton() {
    if (this.libro.milibro) {
      this.textoBoton = 'Ya agregado ✓';
    } else {
      this.textoBoton = 'Agregar a mis libros';
    }
  }

  async getComentarios() {
    const res = await fetch('http://localhost:8080/comentario');
    const resjson = (await res).json();
    return resjson;
  }

  async cargarComentarios() {
    this.comentarios = await this.getComentarios();
    console.table(this.comentarios);
    return this.comentarios.filter(
      (comentario) => this.comentario.idLibro === this.libro.id
    );
  }

  public enviarData() {
    this.http
      .post('http://localhost:8080/comentario', {
        usuario: 'Miranda Venuti',
        tituloLibro: this.libro.titulo,
        idLibro: this.libro.id,
        comentario: this.form.value.textAreaComentario,
      })
      .subscribe((response) => {
        console.log('Comentario enviado!');
        this.form.reset();
        this.getComentarios();
      });
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

export interface Comentario {
  id: number;
  usuario: string;
  tituloLibro: string;
  idLibro: number;
  comentario: string;
}
