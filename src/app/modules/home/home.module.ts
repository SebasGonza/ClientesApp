import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientesComponent } from './pages/create-clientes/create-clientes.component';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Material/material.module';




@NgModule({
  declarations: [
    CreateClientesComponent,
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    CreateClientesComponent,
    ListadoClientesComponent,
  ]
})
export class HomeModule { }
