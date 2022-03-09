import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// esto nos servirá para poder conectarnos al backend (ver más abajo otra modificación)(0/4):
import { HttpClientModule } from "@angular/common/http";

// esto es necesario para poderr sacar datos de un input (1/4)
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductoComponent } from './producto/producto.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductoComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // esto nos servirá también para poder conectarnos al backend:
    HttpClientModule,

     // esto es necesario para poderr sacar datos de un input (2/4)
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
