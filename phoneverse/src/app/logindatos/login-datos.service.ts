import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDatosService {

  public sesion : boolean = false;

  constructor() { }
}
