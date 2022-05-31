import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import de componentes
import { MenuComponent } from './menu/menu.component';
import { ProductoComponent } from './producto/producto.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { DetallesMovilComponent } from './detalles-movil/detalles-movil.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidosComponent } from './pedidos/pedidos.component';

import { PedidosDesglosadosComponent } from './pedidos-desglosados/pedidos-desglosados.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
	  
  {path: 'menu', component: MenuComponent},
  {path: 'producto', component: ProductoComponent},

  {path: 'pedidos', component: PedidosComponent},

  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'detalles-movil/:id', component: DetallesMovilComponent},

  {path: 'pedidos-desglosados/:id', component: PedidosDesglosadosComponent},

  { path: 'carrito', component: CarritoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
