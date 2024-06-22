import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent {
  
  onClickScroll() {
    // Smooth scroll to the next section
    const nextSection = document.querySelector('#siguiente-seccion');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
