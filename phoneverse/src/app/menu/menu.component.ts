import { Component, OnInit } from '@angular/core';
import { LoginDatosService } from '../logindatos/login-datos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public loginDatosService : LoginDatosService) { 

   
    
  }

  ngOnInit(): void {
  }

 
  public cerrarSesion() {

    console.log("sesion cerrada");
    
    this.loginDatosService.sesion = false;


  }
  

}
