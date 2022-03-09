import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // creamos variables para poder almacenar AUTOMÁTICAMENTE los datos tecleados en inputs (3/4)
  public usuario : string = "usuario inicial";
  public password : string = "password inicial";
  public email : string = "email inicial";
  public registroJson : any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     
  }

  public registrarse() {
   
     // vamos a comprobar que efectivamente lo tecleado por el usuario se está pasando del HTML al TypeScript (a los atributos)
     console.log(this.usuario);
     console.log(this.password);
     console.log(this.email);

     // usar la api para registrar con estos datos:
     
     this.http.post("http://localhost/backend_phoneverso/registro_post.php", { "usuario" : this.usuario, "password" : this.password, "email" : this.email }).subscribe( (respuesta)=>{
		
        //console.log( respuesta );
    
        this.registroJson = respuesta;

        if(this.registroJson.respuesta == "ya existe el usuario"){

          alert("ya existe el usuario");

        } else {

          alert("resgitrado con exito");

        }

        console.log(this.registroJson);
  
    } );

  }

  

}
