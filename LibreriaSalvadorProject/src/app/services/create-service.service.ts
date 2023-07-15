import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Create } from '../interfaces/create';

@Injectable({
  providedIn: 'root'
})
export class CreateServiceService {
  usuarioURL = 'http://localhost:8080/usuarios/registro';

  constructor(private http: HttpClient) { }

  getCreates() {
    return this.http.get<Create[]>(this.usuarioURL);
  }

  addCreate(create: Create) {
    return this.http.post<Create>(this.usuarioURL + '/creates', create);
  }

}
