import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})

export class RegistroService {
  usuarioURL = 'http://localhost:8080/usuarios/registro';

  constructor(private httpClient: HttpClient) { }

  registrarUsuario(usuario: any): Observable<any> {
    return this.httpClient.post(this.usuarioURL, usuario);
  }
}
