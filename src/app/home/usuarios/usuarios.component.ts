import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuarioService],
})
export class UsuariosComponent implements OnInit {
  ListarUsuario: Usuario[] = [];
  filtroUsuario = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private UsuarioService: UsuarioService
  ) {}

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
}
