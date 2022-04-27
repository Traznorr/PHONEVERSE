import { Component, OnInit } from '@angular/core';

// paso 1 de 3 para recoger el número tecleado al final de la URL:
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';

import { DatosCarritoService } from '../datos-carrito/datos-carrito.service';

@Component({
  selector: 'app-detalles-movil',
  templateUrl: './detalles-movil.component.html',
  styleUrls: ['./detalles-movil.component.css']
})
export class DetallesMovilComponent implements OnInit {

  public detallesMovilJson : any = {};
  public carrito : any = [];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private datosCarrito : DatosCarritoService) { }

  ngOnInit(): void {

    // paso 3 de 3 para recoger el número tecleado al final de la URL:
    const dni_movil = Number(this.route.snapshot.paramMap.get('id'));
	
    console.log("id:");
    console.log(dni_movil);
    
    let api= "http://localhost/backend_phoneverso/dame_detalles_movil.php?id=" + dni_movil;

    this.http.get(api).subscribe( (respuesta)=>{
		
        //console.log( respuesta );

       this.detallesMovilJson = respuesta;
       console.log(this.detallesMovilJson);
  
    } );
    

  }

  public comprar() {
    console.log("Has pulsado el boton");

    //Lista de la compra
    this.datosCarrito.productos.push(this.detallesMovilJson);

    //Total a pagar
    this.datosCarrito.sumaCarrito = this.datosCarrito.sumaCarrito + this.detallesMovilJson.precio;

    this.router.navigateByUrl("carrito");

    //this.carrito.push("movil1");



  }
  
}
