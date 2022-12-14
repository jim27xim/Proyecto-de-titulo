import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Unidad_Interna } from 'src/app/models/unidad_interna';
import {
  AgregarUnidad,
  Unidad,
  UnidadInternaService,
} from 'src/app/services/unidad-interna.service';

@Component({
  selector: 'app-unidades-internas',
  templateUrl: './unidades-internas.component.html',
  styleUrls: ['./unidades-internas.component.css'],
  providers: [UnidadInternaService],
})
export class UnidadesInternasComponent implements OnInit {
  Unidad_Grupo: FormGroup;
  ListarUnidad: Unidad_Interna[] = [];
  filtroUnidad = '';

  unidad: Unidad = {
    id_ui: '',
    nombre_ui: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private UnidadInternaService: UnidadInternaService
  ) {
    this.Unidad_Grupo = this.fb.group({
      nombre_unidad_i: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listarUnidad();
  }

  listarUnidad() {
    this.UnidadInternaService.getUnidades().subscribe({
      next: (res: any) => {
        this.ListarUnidad = <any>res;
      },
      error: (err) => console.log(err),
    });
  }

  crear_unidad() {
    const UNIDAD: AgregarUnidad = {
      nombre_ui: this.Unidad_Grupo.get('nombre_ui')?.value,
    };
    this.UnidadInternaService.addUnidad(UNIDAD).subscribe();
    this.listarUnidad();
  }

  agregar() {
    delete this.unidad.id_ui;

    this.UnidadInternaService.addUnidad(this.unidad).subscribe();
    this.listarUnidad();
  }

  modificar(id: number) {
    this.router.navigate(['/edit/' + id]);
  }
}
