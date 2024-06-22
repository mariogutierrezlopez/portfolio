import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  elementos = [
    { 
      titulo: 'Elemento 1',
      descripcion: 'Descripción del elemento 1',
      etiquetas: ['etiqueta1', 'etiqueta2']
    },
    { 
      titulo: 'Elemento 2',
      descripcion: 'Descripción del elemento 2',
      etiquetas: ['etiqueta3', 'etiqueta4']
    },
    // Agrega más elementos según sea necesario
  ];
}
