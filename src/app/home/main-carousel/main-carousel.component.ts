import { Component, OnInit } from '@angular/core';
import { mainCarouselData } from '../../../data/mainCarouselData';
import { CarouselItem } from '../../../types/carousel.types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss',
})
export class MainCarouselComponent implements OnInit {
  carouselData: CarouselItem[];

  currentSlide = 0;
  interval = 2000;
  intervalId: any;

  constructor() {
    this.intervalId = null;
    this.carouselData = mainCarouselData;
  }

  ngOnInit(): void {}

  autoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide === this.carouselData.length - 1
        ? 0
        : (this.currentSlide + 1) % this.carouselData.length;
  }

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0
        ? (this.carouselData.length - 1) % this.carouselData.length
        : (this.currentSlide - 1) % this.carouselData.length;
  }
}
