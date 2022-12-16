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
  constructor(
    private activatedRoute: ActivatedRoute,
    private librosService: LibrosService,
    private fb: FormBuilder,
    private reviewService: ReviewService,
    private datePipe: DatePipe,
    private http: HttpClient
  ) {}

  public respuesta: any = [];
  libros = [];
  listaComentarios: Comentario[] = [];
  comentarioText: string;
  public form: FormGroup;
  formBuilder: any;
  public colorBoton: any = {};
  public libroId: number;
  public formattedDate;
  estrellas: any[] = [];
  public textoBoton = '';
  comentariosPorId = [];

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
    idLibro: 15,
    comentario: '',
    tituloLibro: '',
    usuario: '',
  };

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

  async cargarComentarios() {
    this.listaComentarios = await this.reviewService.getComentarios();
    this.comentariosPorId = this.getComentariosPorId();
  }

  getComentariosPorId() {
    console.log(
      this.listaComentarios.filter(
        (comentario) => comentario.idLibro === this.libro.id
      )
    );
    return this.listaComentarios.filter(
      (comentario) => comentario.idLibro === this.libro.id
    );
  }

  public enviarData(): void {
    this.http
      .post('http://localhost:8080/comentario', {
        idLibro: this.libro.id,
        comentario: this.form.value.textAreaComentario,
        tituloLibro: this.libro.titulo,
        usuario: 'María Perez',
      })
      .subscribe((response) => {
        this.form.reset();
        this.cargarComentarios();
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
  idLibro: number;
  comentario: string;
  tituloLibro: string;
  usuario: string;
}
