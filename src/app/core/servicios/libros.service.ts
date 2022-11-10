import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  constructor() {}
  async getLibros() {
    const res = await fetch('http://localhost:8080/libro');
    const resjson = (await res).json();
    return resjson;
  }

  getInfoLibroPorId(id:number) {
    return this.getLibros.filter((libro) => {
      
    })
}
*/
}