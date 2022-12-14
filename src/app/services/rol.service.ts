import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  url = '/api-rol';
  constructor(private http: HttpClient) {}

  //get rol
  getRol() {
    return this.http.get('/api-rol/getRoles');
  }

  //get un rol
  getUnRol(id: string) {
    return this.http.get('/api-rol/getRoles/' + id);
  }

  //agregar un rol
  addRol(rol: AgregarRol) {
    return this.http.post('/api-rol/addRol/', rol);
  }

  //eliminar un rol
  deleteRol(id: number) {
    return this.http.delete('/api-rol/deleteRol/' + id);
  }

  //modificar un rol
  editRol(id: string, rol: rol) {
    return this.http.patch('/api-rol/UpdateRol/' + id, rol);
  }
}

export interface rol {
  id_r?: string;
  nombre_r?: string;
}

export interface AgregarRol {
  nombre_r?: string;
}
