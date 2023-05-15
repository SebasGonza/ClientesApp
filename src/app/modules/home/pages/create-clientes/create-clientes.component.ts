import { Component, OnInit, Query } from '@angular/core';

@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent implements OnInit {

  inputs = document.querySelector('.inputsito') as HTMLDivElement | null;
  constructor() { }

  focusfunct() :void {
    
  }
  ngOnInit(): void {

  }



}
