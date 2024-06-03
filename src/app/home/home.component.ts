import { Component } from '@angular/core';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { menJeans } from '../../data/Men/menJeans';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainCarouselComponent, ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  menJeans: any;

  ngOnInit(): void {
    this.menJeans = menJeans;
  }
}
