import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

// imprescindibile para poder usar http.get (1/2):
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public movilesJson : any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    console.log("pasa por 1");

    // para poder usar http.get tenemos que modificar algo en app.module.ts
    this.http.get("http://localhost/backend_phoneverso/damemoviles_2.0.php").subscribe( (respuesta)=>{
    //this.http.post("https://phoneverse.es/backend_phoneverso/damemoviles_2.0.php", {}).subscribe( (respuesta)=>{      

        console.log("pasa por 2");

        console.log( respuesta );

        this.movilesJson = respuesta;


    } );

   
  }

  // así conseguimos el efecto visual en cada card de cada móvil, 
  ngAfterViewChecked(): void {

    for (let i = 1; i <= this.movilesJson.length; i++) {

      VanillaTilt.init(document.querySelector('#card' + i) as any);

    }

  }
  

}
