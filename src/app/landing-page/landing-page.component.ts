import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, SobreMiComponent, PortfolioComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
