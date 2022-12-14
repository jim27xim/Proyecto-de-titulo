import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tareas } from 'src/app/models/tarea';
import { AgregarTarea, Tarea, TareaService,} from 'src/app/services/tarea.service';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css'],
  providers: [TareaService, UsuarioService],
})
export class CrearTareaComponent implements OnInit {
  ListarUsuario: Usuario[] = [];
  filtroUsuario = '';
  Tarea_formulario: FormGroup;
  ListarTarea: Tareas[] = [];

  tarea: Tarea = {
    id_t: '',
    nombre_t: '',
    descripcion_t: '',
    fecha_entrega_t: '',
    porcentaje_avance_t: '',
    estado_t: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private TareaService: TareaService,
    private UsuarioService: UsuarioService
  ) {
    this.Tarea_formulario = this.fb.group({
      nombre_tarea: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha_termino: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listarUsuario();
  }

  listarUsuario() {
    this.UsuarioService.getUsuarios().subscribe({
      next: (res: any) => {
        this.ListarUsuario = <any>res;
      },
      error: (err) => console.log(err),
    });
 }

  crear_tarea() {
    const TAREA: AgregarTarea = {
      nombre_t: this.Tarea_formulario.get('nombre_tarea')?.value,
      descripcion_t: this.Tarea_formulario.get('descripcion')?.value,
      fecha_entrega_t: this.Tarea_formulario.get('fecha_termino')?.value,
    };
    const año = TAREA.fecha_entrega_t?.substring(0,4);
    const mes = TAREA.fecha_entrega_t?.substring(5,7);
    const dia = TAREA.fecha_entrega_t?.substring(8,10);
    TAREA.fecha_entrega_t = (dia +"-"+mes+"-"+ año)
    this.TareaService.addTarea(TAREA).subscribe();
    this.router.navigate(['/tareas']);
  }

  agregar() {
    delete this.tarea.id_t;

    this.TareaService.addTarea(this.tarea).subscribe();
  }
}
