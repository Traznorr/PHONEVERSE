import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// este import nos servira para usar la libreria de cookies
import { CookieService } from 'ngx-cookie-service';

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
import { DetallesMovilComponent } from './detalles-movil/detalles-movil.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidosDesglosadosComponent } from './pedidos-desglosados/pedidos-desglosados.component';
import { UltimoPasoCompraComponent } from './ultimo-paso-compra/ultimo-paso-compra.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductoComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    DetallesMovilComponent,
    CarritoComponent,
    PedidosComponent,
    PedidosDesglosadosComponent,
    UltimoPasoCompraComponent,
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

    // esto nos servirá también para poder conectarnos al backend:
    HttpClientModule,

     // esto es necesario para poderr sacar datos de un input (2/4)
     FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
