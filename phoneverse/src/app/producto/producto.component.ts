import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector('#card1') as any);
    VanillaTilt.init(document.querySelector('#card2') as any);
    VanillaTilt.init(document.querySelector('#card3') as any);
    VanillaTilt.init(document.querySelector('#card4') as any);
    VanillaTilt.init(document.querySelector('#card5') as any);
    VanillaTilt.init(document.querySelector('#card6') as any);
  }

}
