import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

//Barra de progreso circular
import { NgCircleProgressModule } from 'ng-circle-progress';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './home/usuarios/usuarios.component';
import { CrearUsuariosComponent } from './home/usuarios/crear-usuarios/crear-usuarios.component';
import { NavComponent } from './home/usuarios/nav/nav.component';
import { UnidadesInternasComponent } from './home/unidades-internas/unidades-internas.component';
import { CrearUnidadInternaComponent } from './home/unidades-internas/crear-unidad-interna/crear-unidad-interna.component';
import { EditarUnidadInternaComponent } from './home/unidades-internas/editar-unidad-interna/editar-unidad-interna.component';
import { CargosComponent } from './home/Cargos/cargos.component';
import { CargoComponent } from './home/Cargos/cargo/cargo.component';
import { FlujoDeTareasComponent } from './home/flujo-de-tareas/flujo-de-tareas.component';
import { CrearFlujoDeTareasComponent } from './home/flujo-de-tareas/crear-flujo-de-tareas/crear-flujo-de-tareas.component';
import { VerFlujoDeTareasComponent } from './home/flujo-de-tareas/ver-flujo-de-tareas/ver-flujo-de-tareas.component';
import { NavFlujoDeTareasComponent } from './home/flujo-de-tareas/nav-flujo-de-tareas/nav-flujo-de-tareas.component';
import { TareasComponent } from './home/tareas/tareas.component';
import { CrearTareaComponent } from './home/tareas/crear-tarea/crear-tarea.component';
import { NavTareaComponent } from './home/tareas/nav-tarea/nav-tarea.component';
import { BarraComponent } from './home/barra/barra.component';
import { CardHeaderComponent } from './home/componentes-diseno/card-header/card-header.component';
import { BarTareaComponent } from './home/componentes-diseno/bar-tarea/bar-tarea.component';
import { CardBodyComponent } from './home/componentes-diseno/card-body/card-body.component';
import { BuscadorComponent } from './home/componentes-diseno/buscador/buscador.component';
import { BarUsuarioComponent } from './home/componentes-diseno/bar-usuario/bar-usuario.component';
import { BarSubtareaComponent } from './home/componentes-diseno/bar-subtarea/bar-subtarea.component';
import { BarRolComponent } from './home/componentes-diseno/bar-rol/bar-rol.component';
import { TareaComponent } from './home/tareas/tarea/tarea.component';
import { UsuarioComponent } from './home/usuarios/usuario/usuario.component';
import { BarFlujoComponent } from './home/componentes-diseno/bar-flujo/bar-flujo.component';
import { NavUnidadComponent } from './home/unidades-internas/nav-unidad/nav-unidad.component';
import { TareaSubordinadaComponent } from './home/tareas/tarea-subordinada/tarea-subordinada.component';
import { ReportarTareaComponent } from './home/tareas/reportar-tarea/reportar-tarea.component';
import { CrearTareaSubordinadaComponent } from './home/tareas/crear-tarea-subordinada/crear-tarea-subordinada.component';
import { HistorialComponent } from './home/tareas/historial/historial.component';
import { BarUnidadComponent } from './home/componentes-diseno/bar-unidad/bar-unidad.component';
import { BarListaCargosComponent } from './home/componentes-diseno/bar-lista-cargos/bar-lista-cargos.component';
import { BarResponsableComponent } from './home/componentes-diseno/bar-responsable/bar-responsable.component';
import { NavCargoComponent } from './home/Cargos/nav-cargo/nav-cargo.component';
import { CrearCargoComponent } from './home/Cargos/crear-cargo/crear-cargo.component';
import { ModalAddUsuarioComponent } from './home/usuarios/modal-add-usuario/modal-add-usuario.component';
import { BarNotificacionComponent } from './home/componentes-diseno/bar-notificacion/bar-notificacion.component';
import { NotificacionesComponent } from './home/notificaciones/notificaciones.component';
import { NotificacionComponent } from './home/notificaciones/notificacion/notificacion.component';
import { TareahistoriaComponent } from './home/tareas/tareahistoria/tareahistoria.component';
import { AuthGuard } from './guard/auth.guard';
import { RolGuard } from './guard/rol.guard';
import { LoginGuard } from './guard/login.guard';
import { RolesComponent } from './home/roles/roles.component';
import { NavRolComponent } from './home/roles/nav-rol/nav-rol.component';
import { CrearRolComponent } from './home/roles/crear-rol/crear-rol.component';
import { RolComponent } from './home/roles/rol/rol.component';

//pipes
import { FiltroPipe } from './pipes/filtro-Tarea.pipe';
import { FiltrousuarioPipe } from './pipes/filtro-Usuario.pipe';
import { FiltroCargoPipe } from './pipes/filtro-Cargo.pipe';
import { FiltroUnidadPipe } from './pipes/filtro-unidad.pipe';
import { FiltroFlujoPipe } from './pipes/filtro-flujo.pipe';
import { FiltroSubordinadaPipe } from './pipes/filtro-subordinada.pipe';
import { FiltroRolPipe } from './pipes/filtro-rol.pipe';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard]},
  { path: 'usuario/:id', component: UsuarioComponent, canActivate: [AuthGuard]},
  { path: 'crear_usuario', component: CrearUsuariosComponent, canActivate: [AuthGuard, RolGuard], data: { expectedRole: 'Administrador'}},
  { path: 'unidades_internas', component: UnidadesInternasComponent, canActivate: [AuthGuard, RolGuard], data: { expectedRole: 'Administrador'}},
  { path: 'crear_unidad_interna', component: CrearUnidadInternaComponent, canActivate: [AuthGuard, RolGuard], data: { expectedRole: 'Administrador'}},
  { path: 'unidad_interna/:id', component: EditarUnidadInternaComponent, canActivate: [AuthGuard, RolGuard], data: { expectedRole: 'Administrador'}},
  { path: 'cargos', component: CargosComponent, canActivate: [AuthGuard, RolGuard], data: { expectedRole: 'Administrador'}},
  { path: 'crear_cargo', component: CrearCargoComponent, canActivate: [AuthGuard, RolGuard], data: { expectedRole: 'Administrador'}},
  { path: 'cargo/:id', component: CargoComponent, canActivate: [AuthGuard, RolGuard], data: { expectedRole: 'Administrador'}},
  { path: 'roles', component: RolesComponent, canActivate: [AuthGuard, RolGuard], data: { expectedRole: 'Administrador'}},
  { path: 'crear_roles', component: CrearRolComponent, canActivate: [AuthGuard, RolGuard], data: { expectedRole: 'Administrador'}},
  { path: 'rol/:id', component: RolComponent, canActivate: [AuthGuard, RolGuard], data: { expectedRole: 'Administrador'}},
  { path: 'flujo_de_tareas', component: FlujoDeTareasComponent, canActivate: [AuthGuard]},
  { path: 'crear_flujo_de_tareas', component: CrearFlujoDeTareasComponent, canActivate: [AuthGuard] },
  { path: 'flujo_de_tarea/:id', component: VerFlujoDeTareasComponent, canActivate: [AuthGuard] },
  { path: 'tareas', component: TareasComponent, canActivate: [AuthGuard] },
  { path: 'tarea/:id', component: TareaComponent, canActivate: [AuthGuard] },
  { path: 'tarea_subordinada/:id', component: TareaSubordinadaComponent, canActivate: [AuthGuard] },
  { path: 'historial', component: HistorialComponent, canActivate: [AuthGuard] },
  { path: 'modal_usuario', component: ModalAddUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'crear_subordinada', component: CrearTareaSubordinadaComponent, canActivate: [AuthGuard] },
  { path: 'reportar_tarea', component: ReportarTareaComponent, canActivate: [AuthGuard] },
  { path: 'crear_tarea', component: CrearTareaComponent, canActivate: [AuthGuard] },
  { path: 'nav_tarea', component: NavTareaComponent, canActivate: [AuthGuard] },
  { path: 'notificaciones', component: NotificacionesComponent, canActivate: [AuthGuard] },
  { path: 'notificacion/:id', component: NotificacionComponent, canActivate: [AuthGuard] },
  { path: 'historialtarea/:id', component: TareahistoriaComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsuariosComponent,
    UsuarioComponent,
    CrearUsuariosComponent,
    NavComponent,
    UnidadesInternasComponent,
    CrearUnidadInternaComponent,
    EditarUnidadInternaComponent,
    CargosComponent,
    FlujoDeTareasComponent,
    CrearFlujoDeTareasComponent,
    VerFlujoDeTareasComponent,
    NavFlujoDeTareasComponent,
    TareasComponent,
    TareaComponent,
    CrearTareaComponent,
    NavTareaComponent,
    BarraComponent,
    CardHeaderComponent,
    BarTareaComponent,
    CardBodyComponent,
    BuscadorComponent,
    BarUsuarioComponent,
    BarSubtareaComponent,
    BarRolComponent,
    BarFlujoComponent,
    NavUnidadComponent,
    TareaSubordinadaComponent,
    ReportarTareaComponent,
    CrearTareaSubordinadaComponent,
    HistorialComponent,
    FiltroPipe,
    FiltroCargoPipe,
    FiltrousuarioPipe,
    BarResponsableComponent,
    BarListaCargosComponent,
    CargoComponent,
    NavCargoComponent,
    CrearCargoComponent,
    FiltroUnidadPipe,
    FiltroFlujoPipe,
    FiltroSubordinadaPipe,
    BarUnidadComponent,
    ModalAddUsuarioComponent,
    BarNotificacionComponent,
    NotificacionesComponent,
    NotificacionComponent,
    TareahistoriaComponent,
    RolesComponent,
    NavRolComponent,
    CrearRolComponent,
    FiltroRolPipe,
    RolComponent,
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      radius: 48,
      title: '100',
      titleFontSize: '32',
      titleColor: '#ffffff',
      showTitle: true,
      showUnits: true,
      unitsColor: '#ffffff',
      unitsFontSize: '32',
      outerStrokeWidth: 10,
      outerStrokeColor: '#f86d66',
      outerStrokeGradientStopColor: '#53a9ff',
      backgroundColor: '#000000',
      backgroundGradientStopColor: '#000000',
      backgroundStroke: '#000000',
      backgroundStrokeWidth: 0,
      backgroundPadding: 0,
      space: -10,
      maxPercent: 100,
      unitsFontWeight: '100',
      innerStrokeColor: '#9d9d9d',
      innerStrokeWidth: 10,
      titleFontWeight: '100',
      imageHeight: 20,
      imageWidth: 20,
      animateTitle: false,
      animationDuration: 1000,
      showSubtitle: false,
      clockwise: false,
      responsive: false,
      startFromZero: false,
      lazy: true,
    }),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
