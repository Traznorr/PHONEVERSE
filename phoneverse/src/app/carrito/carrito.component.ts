import { Component, OnInit } from '@angular/core';
import { DatosCarritoService } from '../datos-carrito/datos-carrito.service';
import { LoginDatosService } from '../logindatos/login-datos.service';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public productosCarrito : any = [];

  public precioTotal : number;
  public respuestaFinalizarPedidos : any;
  public idUsuario : number;

  constructor(private datosCarrito : DatosCarritoService, private http: HttpClient, private loginDatosService : LoginDatosService) { 
    
    this.precioTotal = 0;
    this.idUsuario = -1;

  }

  ngOnInit(): void {

    this.productosCarrito = this.datosCarrito.productos;

    this.precioTotal = this.datosCarrito.sumaCarrito;

    this.idUsuario = this.loginDatosService.idUsuarioLogueado;

  }

  public finalizarPedido() {
    
    console.log( "pasa por 1" );
    
    this.http.post("http://localhost/backend_phoneverso/finalizar_compra.php", { "productosCarrito" : this.productosCarrito, "precioTotal" : this.precioTotal, "idUsuario" : this.idUsuario }).subscribe( (respuesta)=>{

         console.log( "pasa por 2" );

         //this.http.post("https://phoneverse.es/backend_phoneverso/registro_post.php", { "usuario" : this.usuario, "password" : this.password, "email" : this.email }).subscribe( (respuesta)=>{
     
         console.log( respuesta );
         
         this.respuestaFinalizarPedidos = respuesta;
         
         console.log( "pasa por 3" );

         /*
         if (this.registroJson.respuesta == "ya existe el usuario"){
 
           alert("¡¡¡Ya existe el usuario!!!");
 
         } else {
 
           this.router.navigateByUrl("login");
 
           alert("¡¡¡Registrado con exito!!!");
 
         }
 
         console.log(this.registroJson);
         */
   
     } );    

    /*
    //Lista de la compra
    this.datosCarrito.productos.push(this.detallesMovilJson);

    //Total a pagar
    this.datosCarrito.sumaCarrito = this.datosCarrito.sumaCarrito + this.detallesMovilJson.precio;

    this.router.navigateByUrl("carrito");

    //this.carrito.push("movil1");
    */

  }

}
