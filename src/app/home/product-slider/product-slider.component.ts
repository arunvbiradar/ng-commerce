import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss',
})
export class ProductSliderComponent {
  @Input() title!: string;
  @Input() products!: any;

  constructor() {}
}
