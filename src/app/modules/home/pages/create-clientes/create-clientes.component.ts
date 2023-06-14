import { Component, OnInit, Query } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ClienteResponse } from 'src/app/data/ClienteResponse';
import { Cliente } from 'src/app/data/ClientesDto';



@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent implements OnInit {

  cliente?: Cliente;

  formularioCrear: FormGroup = this.fmbuilder.group({
    nombre: [, Validators.required, Validators.minLength(5),],
    apellido: [, Validators.required, Validators.minLength(5)],
    email: [, Validators.required, Validators.email]
  })

  constructor(private fmbuilder: FormBuilder, private clienteService: ClienteService) { }

  ngOnInit(): void {

  }

  crearCliente(): void {

    this.clienteService.createCliente(this.cliente!).subscribe(
      {
        next: ((data: ClienteResponse) => {
          
        }),
      }
    )

  }



}
