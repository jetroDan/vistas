import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'my-count',
    loadChildren: () => import('./my-count/my-count.module').then( m => m.MyCountPageModule)
  },  {
    path: 'info-empresa',
    loadChildren: () => import('./info-empresa/info-empresa.module').then( m => m.InfoEmpresaPageModule)
  },
  {
    path: 'crear-usuario',
    loadChildren: () => import('./crear-usuario/crear-usuario.module').then( m => m.CrearUsuarioPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'servicios-de-hogar',
    loadChildren: () => import('./servicios-de-hogar/servicios-de-hogar.module').then( m => m.ServiciosDeHogarPageModule)
  },
  {
    path: 'invitaciones-contrataciones',
    loadChildren: () => import('./invitaciones-contrataciones/invitaciones-contrataciones.module').then( m => m.InvitacionesContratacionesPageModule)
  },

  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'plan-contratado',
    loadChildren: () => import('./plan-contratado/plan-contratado.module').then( m => m.PlanContratadoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
