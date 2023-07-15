import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ProcesaPagoComponent } from './components/procesa-pago/procesa-pago.component';
/*
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
*/

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { hideNavbar: true } },
  { path: 'register', component: RegisterComponent, data: { hideNavbar: true } },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detalleProducto', component: DetalleProductoComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'procesaPago', component: ProcesaPagoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
