import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})

export class BannerComponent {
  images = [
    'https://picsum.photos/400/400?random=1',
    'https://picsum.photos/400/400?random=1',
    'https://picsum.photos/400/400?random=1',
    
  ];
  currentIndex = 0;

  title = 'Apple Watch';
  subtitle = 'The ultimate device for a healthy life';



  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  getBackgroundImage() {
    return `url(${this.images[this.currentIndex]})`;
  }

  // startAutoSlide() {
  //   setInterval(() => {
  //     this.nextSlide();
  //   }, 10000); // Cambiar el banner cada 10 segundos


}
