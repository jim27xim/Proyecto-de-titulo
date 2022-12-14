import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  url = '/api-reporte';
  constructor(private http: HttpClient) {}

  //get reportes
  getReportes() {
    return this.http.get('/api-rol/getVista_Reportes_Tareas');
  }

  //get un reporte
  getUnReporte(id: string) {
    return this.http.get('/api-reporte/getVista_Reporte_Tarea' + id);
  }

  //agregar un reporte
  addReporte(reporte: AgregarReporte) {
    return this.http.post('/api-reporte/addReporteProblema', reporte);
  }

}

export interface Reporte {
  id_rp?: string;
  asunto_rp?: string;
  descripcion_rp?: string;
}

export interface AgregarReporte {
    id_rp?: string;
    asunto_rp?: string;
    descripcion_rp?: string;

}
