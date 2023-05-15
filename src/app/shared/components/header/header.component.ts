import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  title: string = 'Clientes APP';
  imageUrl: string = 'assets\img\The-punisher-logo-png-transparent.png';

  ngOnInit(): void {
  }

}
