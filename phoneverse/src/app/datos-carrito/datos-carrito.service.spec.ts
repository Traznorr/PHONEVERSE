import { TestBed } from '@angular/core/testing';

import { DatosCarritoService } from './datos-carrito.service';

describe('DatosCarritoService', () => {
  let service: DatosCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
