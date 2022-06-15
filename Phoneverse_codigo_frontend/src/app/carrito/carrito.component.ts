import { Component, OnInit } from '@angular/core';
import { DatosCarritoService } from '../datos-carrito/datos-carrito.service';
import { LoginDatosService } from '../logindatos/login-datos.service';

import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';

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
  public idsProductos : any;

  public cestaVacia : boolean = false;

  constructor(private datosCarrito : DatosCarritoService, private http: HttpClient, public loginDatosService : LoginDatosService, private router: Router) { 
    
    this.precioTotal = 0;
    this.idUsuario = -1;
    this.idsProductos = [];

  }

  ngOnInit(): void {

    this.productosCarrito = this.datosCarrito.productos;

    this.precioTotal = this.datosCarrito.sumaCarrito;

    this.idUsuario = this.loginDatosService.idUsuarioLogueado;

    this.idsProductos = this.datosCarrito.idsProductos;

    if (this.productosCarrito.length == 0) {
      this.cestaVacia = false;
    } else {
      this.cestaVacia = true;
    }

  }

  public finalizarPedido() {
    
    console.log( "pasa por 1" );

    this.http.post("http://localhost/backend_phoneverso/finalizar_compra.php", { "productosCarrito" : this.productosCarrito, "precioTotal" : this.precioTotal, "idUsuario" : this.idUsuario, "idsProductos" : this.idsProductos}).subscribe( (respuesta)=>{
    //this.http.post("https://phoneverse.es/backend_phoneverso/finalizar_compra.php", { "productosCarrito" : this.productosCarrito, "precioTotal" : this.precioTotal, "idUsuario" : this.idUsuario, "idsProductos" : this.idsProductos}).subscribe( (respuesta)=>{
    //this.http.post("https://phoneverse.es/backend_phoneverso/login_post.php", { "usuario" : this.usuario, "password" : this.password }).subscribe( (respuesta)=>{

         console.log( "pasa por 2" );

         //this.http.post("https://phoneverse.es/backend_phoneverso/registro_post.php", { "usuario" : this.usuario, "password" : this.password, "email" : this.email }).subscribe( (respuesta)=>{
     
         console.log("id usuario:");
         console.log(this.idUsuario);

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
   
         this.productosCarrito = [];

         this.precioTotal = 0;
     
         this.idUsuario = 0;
     
         this.idsProductos = [];

         // y ahora vaciamos el carrito en el servicio

         this.datosCarrito.productos = [];

         this.datosCarrito.sumaCarrito = 0;
     
         this.datosCarrito.idsProductos = [];         

         this.cestaVacia = true;

         // y mostramos un mensaje

         this.router.navigateByUrl("ultimopaso");

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
