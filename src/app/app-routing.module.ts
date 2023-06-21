import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientesComponent } from './modules/home/pages/create-clientes/create-clientes.component';
import { ListadoClientesComponent } from './modules/home/pages/listado-clientes/listado-clientes.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  { path: 'crear', component: CreateClientesComponent },
  { path: 'listado', component: ListadoClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
