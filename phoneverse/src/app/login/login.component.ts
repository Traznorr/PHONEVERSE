import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';
import { LoginDatosService } from '../logindatos/login-datos.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   // creamos variables para poder almacenar AUTOMÁTICAMENTE los datos tecleados en inputs (3/4)
   public usuario : string = "usuario inicial";
   public password : string = "password inicial";

   public mensajeError : boolean = false;
   public textoError : string = "";

   public registroJson : any = [];


  constructor(private http: HttpClient, private router: Router,
              private loginDatosService : LoginDatosService, private cookieService : CookieService) { }

  ngOnInit(): void {
    
  }

  public logearse() {

      console.log(this.usuario);
      console.log(this.password);

      this.cookieService.set('myCookie', this.usuario);
      this.cookieService.get('myCookie');

      console.log("pasa por 0");

      this.http.post("http://localhost/backend_phoneverso/login_post.php", { "usuario" : this.usuario, "password" : this.password }).subscribe( (respuesta)=>{
      //this.http.post("https://phoneverse.es/backend_phoneverso/login_post.php", { "usuario" : this.usuario, "password" : this.password }).subscribe( (respuesta)=>{
      
          console.log("pasa por 1");

          console.log( respuesta );
      
          this.registroJson = respuesta;

          if (this.registroJson.respuesta == "SI existe el usuario") {

            this.mensajeError = false;

            this.loginDatosService.sesion = true;

            this.loginDatosService.idUsuarioLogueado = this.registroJson.id_usuario;

            this.router.navigateByUrl("inicio");

          } else {

            this.mensajeError = true;
            this.textoError = "No existe ese usuario";

          }

          console.log(this.registroJson);

      } );


  }

}
