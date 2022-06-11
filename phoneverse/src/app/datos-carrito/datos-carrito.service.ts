import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosCarritoService {

  public productos : any = [];
  public sumaCarrito : number = 0;
  public idsProductos : any = [];

  constructor() { }
}
