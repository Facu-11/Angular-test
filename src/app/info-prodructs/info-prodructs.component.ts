import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener} from '@angular/core';


interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}


@Component({
  selector: 'app-info-prodructs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-prodructs.component.html',
  styleUrl: './info-prodructs.component.css'
})
export class InfoProdructsComponent implements OnInit{
  
  products: Product[] = []; // Aquí usamos la interfaz Product
  allProducts: { razr: Product[], edge: Product[] } = {
    razr: [
      { name: 'Motorola Razr 50 Ultra', description: 'Pantalla externa de 4” y 165 Hz', price: '$ 1.999.999', image: 'path_to_image1' },
      { name: 'Motorola Razr 40', description: 'Pantalla externa de 4"', price: '$ 1.499.999', image: 'path_to_image2' },
      { name: 'Motorola Razr 2023', description: 'Pantalla externa de 4"', price: '$ 1.299.999', image: 'path_to_image3' }
    ],
    edge: [
      { name: 'Motorola Edge 30', description: 'Cámara y rendimiento increíbles', price: '$ 1.899.999', image: 'path_to_image4' },
      { name: 'Motorola Edge 40', description: 'Pantalla OLED de 144 Hz', price: '$ 1.799.999', image: 'path_to_image5' },
      { name: 'Motorola Edge 50', description: 'Carga rápida y batería duradera', price: '$ 1.699.999', image: 'path_to_image6' }
    ]
  };

  currentSlide = 0;
  isMobileView = false;

  ngOnInit() {
    this.products = this.allProducts.razr; // Mostrar productos de la familia Razr por defecto
    this.checkMobileView();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobileView();
  }

  checkMobileView() {
    this.isMobileView = window.innerWidth <= 768;
  }

  nextSlide() {
    if (this.currentSlide < this.products.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Regresa al primer producto si está en el último
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.products.length - 1; // Va al último producto si está en el primero
    }
  }

  showFamily(family: 'razr' | 'edge') {
    this.products = this.allProducts[family];
    this.currentSlide = 0; // Reiniciar el carrusel
  }
  
}
