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
		
        console.log("pasa por 2");

        console.log( respuesta );

        this.movilesJson = respuesta;

        for (let i = 1; i <= 2 ; i++) {

          VanillaTilt.init(document.querySelector('#card'+i ) as any);
    
        }
  
    } );

/*
    VanillaTilt.init(document.querySelector('#card1') as any);
    VanillaTilt.init(document.querySelector('#card2') as any);
    VanillaTilt.init(document.querySelector('#card3') as any);
    VanillaTilt.init(document.querySelector('#card4') as any);
    VanillaTilt.init(document.querySelector('#card5') as any);
    VanillaTilt.init(document.querySelector('#card6') as any);
*/
  }

}
