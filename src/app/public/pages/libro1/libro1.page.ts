import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from 'src/app/core/servicios/libros.service';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/core/servicios/review.service';
import { noop } from 'rxjs';
@Component({
  selector: 'app-libro1',
  templateUrl: './libro1.page.html',
  styleUrls: ['./libro1.page.scss'],
})

export class Libro1Page implements OnInit {

  public respuesta:any = [];
  public comentarios:any = [];
  comentarioText:string;
  public form: FormGroup;

constructor(
    private activatedRoute: ActivatedRoute,
    private librosService: LibrosService,
    private formBuilder: FormBuilder, 
    private ReviewService: ReviewService
    ){ }

libros=[];

usuarios=[]

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
textoBoton='';


  ngOnInit() {
    this.getLibroPorId();
    this.cambiarBoton();
    this.enviarData();
    this.form = this.formBuilder.group({
      textAreaComentario:['']
    });
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

public cambiarBoton (){
  if (this.libro.milibro) {
    this.textoBoton = "Ya agregado";
    } else {
      this.textoBoton = "Agregar a mis libros";
    }
}
    
    public enviarData(){
      this.ReviewService.post('http://localhost:8080/libro',
      {
        email:"Lautaro Viceconti",
        nombre: this.form.value.textAreaComentario,
        prioridad: 10
        }
      )
      .subscribe(respuesta=>{ 
        console.log('Comentario!!!')
       // this.getUsuarios();
        this.form.reset();
      })
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
