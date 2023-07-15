import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Router, RouterModule } from '@angular/router';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/*import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcesaPagoComponent } from './components/procesa-pago/procesa-pago.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ShoppingCartComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    DetalleProductoComponent,
    AdminPanelComponent,
    ProcesaPagoComponent,
    /*RegistroUsuarioComponent*/
  ],
  imports: [
    MatFormFieldModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
