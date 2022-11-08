import { TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/core/services/libros.service.spec.ts
import { LibrosService } from './libros.service';

describe('LibrosService', () => {
  let service: LibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosService);
========
import { LibroService } from './libro.service';

describe('LibroService', () => {
  let service: LibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroService);
>>>>>>>> 6d81e24827fc85e2bdc3eeba9db90060bc18c525:src/app/core/services/libro.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
