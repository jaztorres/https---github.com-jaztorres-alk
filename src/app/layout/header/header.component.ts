import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems =[
    {name: 'Promociones', color: 'green', route:'/promociones'},
    {name: 'Participa', color: 'purple', route:'/participa'},
    {name: 'Premios', color: 'purple', route:'/premios'},
    {name: 'Ganadores', color: 'purple', route:'/ganadores'},
  ];
}