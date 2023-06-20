import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ClienteResponse } from 'src/app/data/ClienteResponse';
import { Cliente } from 'src/app/data/ClientesDto';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl: string = 'http://10.102.1.10:8090/api'
  clientes: Cliente[] = [];
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    const url = this.baseUrl + '/clientes';
    return this.http.get<Cliente[]>(url);
  }

  editCliente(id: number, cliente: Cliente): Observable<ClienteResponse> {
    const url = this.baseUrl + '/clientes/' + id;
    return this.http.put<ClienteResponse>(url, cliente).pipe(
      catchError(e => {
        console.error(e);
        Swal.fire({
          title: 'Error al editar', text: e.error.errores ? e.error.errores : e.error.mensaje, icon: 'error',
        }
        )
        return throwError(() => e);
      })
    );
  }

  deleteCliente(id: number): Observable<ClienteResponse> {
    const url = this.baseUrl + '/clientes/' + id;
    return this.http.delete<ClienteResponse>(url).pipe(
      catchError(e => {
        console.error(e);
        return throwError(() => e);
      })
    );

  }
  createCliente(cliente: Cliente): Observable<ClienteResponse> {
    const url = this.baseUrl + '/clientes/';
    return this.http.post<ClienteResponse>(url, cliente).pipe(
      catchError(e => {
        console.error(e);
        Swal.fire({
          title: 'Error al crear', text: e.error.errores ? e.error.errores : e.error.mensaje, icon: 'error',
        }
        )
        return throwError(() => e);
      })
    );
  }


}
