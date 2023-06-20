import { Component, OnInit, Query } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators, updateOn } from '@rxweb/reactive-form-validators';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ClienteResponse } from 'src/app/data/ClienteResponse';
import { Cliente } from 'src/app/data/ClientesDto';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent {

  mensaje?: string;
  esError?: boolean;
  cliente?: Cliente;

  formularioCrear: FormGroup = this.fmbuilder.group({
    nombre: ['', { validators: [Validators.required, RxwebValidators.alpha({ allowWhiteSpace: true }), Validators.minLength(4)], updateOn: 'blur' }],
    apellido: ['', { validators: [Validators.required, RxwebValidators.alpha({ allowWhiteSpace: true }), Validators.minLength(5)], updateOn: 'blur' }],
    email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
  },
  )

  constructor(private fmbuilder: FormBuilder, private clienteService: ClienteService) { }


  validarCampo(): void {
    console.log(this.formularioCrear);
    console.log(this.formularioCrear.errors);
  }
  crearCliente(): void {

    this.clienteService.createCliente(this.cliente!).subscribe(
      {
        next: ((data: ClienteResponse) => {
          this.mensaje = data.mensaje;
          Swal.fire({
            title: 'Exito',
            text: data.mensaje,
            icon: 'success'
          })
        }),
        error: (() => {
          (data: ClienteResponse) => {
            this.esError = true;
            console.log(this.esError);
          }
        }
        )

      })

  }
}
