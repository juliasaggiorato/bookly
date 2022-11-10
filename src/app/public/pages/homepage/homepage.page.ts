import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/core/servicios/libro.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  constructor(private librosService: LibrosService) {}
  libros = [];
  ngOnInit() {
    this.getLibros();
  }
  async getLibros() {
    this.libros = await this.librosService.getLibros();
    console.log(this.libros);
  }
}
