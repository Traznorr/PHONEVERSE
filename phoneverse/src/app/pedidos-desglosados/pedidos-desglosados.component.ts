import { Component, OnInit } from '@angular/core';

// imprescindibile para poder usar http.get (1/2):
import { HttpClient } from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedidos-desglosados',
  templateUrl: './pedidos-desglosados.component.html',
  styleUrls: ['./pedidos-desglosados.component.css']
})
export class PedidosDesglosadosComponent implements OnInit {

  public pedidos_desglosados : any = [];
  private id_pedido : number = -1;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log("pasa por 1");

    // paso 3 de 3 para recoger el número tecleado al final de la URL:
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.id_pedido = id;

    // para poder usar http.get tenemos que modificar algo en app.module.ts
    this.http.post("http://localhost/backend_phoneverso/dame_pedidos_desglosados.php", { "id_pedido" : this.id_pedido }).subscribe( (respuesta)=>{
		
        console.log("pasa por 2");

        console.log( respuesta );

        this.pedidos_desglosados = respuesta;

    } );

  }
}
