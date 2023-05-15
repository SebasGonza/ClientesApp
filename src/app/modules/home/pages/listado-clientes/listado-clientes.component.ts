import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ClienteResponse } from 'src/app/data/ClienteResponse';
import { Cliente } from 'src/app/data/ClientesDto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  formularioActualizar: FormGroup = this.fmbuilder.group({
    nombre: [, Validators.required],
    apellido: [, Validators.required],
    email: [, Validators.required]
  })

  esError?: boolean;
  mensaje?: string;
  clienteSeleccionado?: Cliente;
  cliente?: Cliente;
  mostrar: boolean = false;
  clientes?: Cliente[];
  constructor(private fmbuilder: FormBuilder, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log();
    console.log(changes);
  }

  mostrarModal(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
    let formulario = this.formularioActualizar.controls;
    this.mostrar == true ? this.mostrar = false : this.mostrar = true;

    formulario['nombre'].setValue(cliente.nombre);
    formulario['apellido'].setValue(cliente.apellido);
    formulario['email'].setValue(cliente.email);



  }

  actualizarCliente(): void {
    let formulario = this.formularioActualizar.controls;

    this.cliente = this.formularioActualizar.value;

    this.clienteService.editCliente(this.clienteSeleccionado!.id, this.cliente!).subscribe({
      next: ((data: ClienteResponse) => {
        this.mensaje = data.mensaje;
        this.clienteSeleccionado = data.cliente;
        this.mostrar = false;
        this.clienteService.getClientes().subscribe(
          (clientes) => {
            this.clientes = clientes;
          }
        );
        Swal.fire({
          title: 'Exito',
          text: data.mensaje,
          icon: 'success'
        })
      }),
      error: ((data: ClienteResponse) => {
        this.esError = true;
        console.log(this.esError);
      }),
    }
    )
  }

  eliminarCliente(id?: number): void {

    id ? true : id = this.clienteSeleccionado?.id;

    this.clienteService.deleteCliente(id!).subscribe(
      {
        next: ((data: ClienteResponse) => {
          this.mostrar = false;
          this.clienteService.getClientes().subscribe(
            (clientes) => {
              this.clientes = clientes;
            });

          Swal.fire({
            title: 'Exito',
            text: data.mensaje,
            icon: 'success'
          });
        })
      }
    );

  }



}