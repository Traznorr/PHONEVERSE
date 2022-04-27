import { Component, OnInit } from '@angular/core';
import { LoginDatosService } from './logindatos/login-datos.service';

//import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*
  public title = 'phoneverse';
  public usuario : string = "fulano2";
  public password : string = "password2";
  public registroJson : any = [];
  */

  constructor(public loginDatosService : LoginDatosService/*, private http: HttpClient*/) { }

  ngOnInit(): void {

    /*
    // PRUEBA CON POST:

    this.http.post("http://localhost/backend/registro_post.php", { "usuario" : this.usuario, "password" : this.password }).subscribe( (respuesta)=>{
		
        //console.log( respuesta );
    
        this.registroJson = respuesta;

        if(this.registroJson.respuesta == "ya existe el usuario") {

          alert("ya existe el usuario");

        } else {

          alert("resgitrado con exito");

        }

        console.log(this.registroJson);
  
    } );
    */

    let menu_inicio = document.getElementById("menu_inicio");
    console.log(menu_inicio);
    
    
  }

  public goHeader(){
      document.getElementById("header")?.scrollIntoView({behavior:"smooth"});
  }
}
