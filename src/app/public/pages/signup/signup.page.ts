import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor(private http: HttpClient) {}
  usuario: string = 'Usuario';
  email: string = 'Email';
  contrasena: string = 'Contraseña';

  ngOnInit() {
    this.usuario = this.usuarioInput.value;
    this.email = this.emailInput.value;
    this.contrasena = this.contrasenaInput.value;

    this.http
      .post('http://localhost:8080/usuario', {
        nombre: this.usuario,
        email: this.email,
        password: this.contrasena,
      })
      .subscribe((response) => {});
  }

  @ViewChild('#usuarioInput') usuarioInput: HTMLInputElement;
  @ViewChild('#emailInput') emailInput: HTMLInputElement;
  @ViewChild('#contrasenaInput') contrasenaInput: HTMLInputElement;
}
