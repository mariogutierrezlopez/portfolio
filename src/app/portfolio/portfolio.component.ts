  import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  @Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
  })
  export class PortfolioComponent {
    proyectos = [
      { 
        titulo: 'Elemento 1',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
        etiquetas: ['etiqueta1', 'etiqueta2']
      },
      { 
        titulo: 'Elemento 2',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore' ,
        etiquetas: ['etiqueta3', 'etiqueta4']
      },
      {
        titulo: 'Elemento 3',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
        etiquetas: ['etiqueta5', 'etiqueta6']
      },
      { 
        titulo: 'Elemento 1',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
        etiquetas: ['etiqueta1', 'etiqueta2']
      },
      { 
        titulo: 'Elemento 2',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore' ,
        etiquetas: ['etiqueta3', 'etiqueta4']
      },
      {
        titulo: 'Elemento 3',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
        etiquetas: ['etiqueta5', 'etiqueta6']
      }
    ];
  }
