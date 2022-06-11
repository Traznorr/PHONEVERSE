import { TestBed } from '@angular/core/testing';

import { LoginDatosService } from './login-datos.service';

describe('LoginDatosService', () => {
  let service: LoginDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
