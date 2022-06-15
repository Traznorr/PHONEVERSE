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
  public carruselImagenes : any = [];

  public numeroImagenActualCarrusel : number = 0;
  public imagenVisibleAhora : string = "";

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private datosCarrito : DatosCarritoService) { }

  ngOnInit(): void {

    // paso 3 de 3 para recoger el número tecleado al final de la URL:
    const dni_movil = Number(this.route.snapshot.paramMap.get('id'));
	
    console.log("id:");
    console.log(dni_movil);
    
    let api = "http://localhost/backend_phoneverso/dame_detalles_movil_2.0.php?id=" + dni_movil;
    //let api = "https://phoneverse.es/backend_phoneverso/dame_detalles_movil_2.0.php?id=" + dni_movil;

    this.http.get(api).subscribe( (respuesta)=> {
		
       //console.log( respuesta );

       this.detallesMovilJson = respuesta;
       console.log(this.detallesMovilJson);

       // almacenamos todas las imágenes del móvil -del carrusel- en un array

       this.carruselImagenes = this.detallesMovilJson.fotos_carrusel.split(",");
  
       this.numeroImagenActualCarrusel = 0;

       this.imagenVisibleAhora = this.carruselImagenes[0];

    } );
    
  }
  public comprar() {
    console.log("Has pulsado el boton");

    //Lista de la compra
    this.datosCarrito.productos.push(this.detallesMovilJson);

    this.datosCarrito.idsProductos.push(this.detallesMovilJson.id);

    //Total a pagar
    this.datosCarrito.sumaCarrito = this.datosCarrito.sumaCarrito + parseInt(this.detallesMovilJson.precio);

    this.router.navigateByUrl("carrito");

    //this.carrito.push("movil1");



  }
 
  public siguienteImagen() {

    this.numeroImagenActualCarrusel++;

    if (this.numeroImagenActualCarrusel >= this.carruselImagenes.length) {

      this.numeroImagenActualCarrusel = 0;

    }

    // ahora actualizamos la imagen utilizando el array de imágenes
    this.imagenVisibleAhora = this.carruselImagenes[ this.numeroImagenActualCarrusel ];

  }

  public anteriorImagen() {

    this.numeroImagenActualCarrusel--;

    if (this.numeroImagenActualCarrusel < 0) {

      this.numeroImagenActualCarrusel = this.carruselImagenes.length - 1;

    }

    // ahora actualizamos la imagen utilizando el array de imágenes
    this.imagenVisibleAhora = this.carruselImagenes[ this.numeroImagenActualCarrusel ];

  }


}
