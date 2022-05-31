import { Component, OnInit } from '@angular/core';

// imprescindibile para poder usar http.get (1/2):
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public pedidos : any = [];
  private id_usuario : number = 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    console.log("pasa por 1");

    // para poder usar http.get tenemos que modificar algo en app.module.ts
    this.http.post("http://localhost/backend_phoneverso/dame_pedidos.php", { "id_usuario" : this.id_usuario }).subscribe( (respuesta)=>{
		
        console.log("pasa por 2");

        console.log( respuesta );

        this.pedidos = respuesta;

    } );

  }

}
