import { Component, OnInit } from '@angular/core';
import { LoginDatosService } from './logindatos/login-datos.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'phoneverse';

  constructor(public loginDatosService : LoginDatosService) { }

  ngOnInit(): void {

    let menu_inicio = document.getElementById("menu_inicio");
    console.log(menu_inicio);
    
    
  }

  public goHeader(){
      document.getElementById("header")?.scrollIntoView({behavior:"smooth"});
  }
}
