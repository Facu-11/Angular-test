import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDataComponent } from '../product-data/product-data.component';
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { phoneDetails } from '../../Core/iphoneDetails';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [CommonModule,ProductDataComponent],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css'
})
export class ProductContainerComponent {
  currentSlide = 0;
  isMobileView = false;

  dataPhone : Array <phoneDetails>;

  family: Array <phoneDetails> = [] ;

  constructor(private data: StaticDataSvService){
    this.dataPhone = this.data.getData()
    this.family = [this.dataPhone[0],this.dataPhone[1]]
  }

  // products: Array<Product> = this.allProducts.edge; // Aquí usamos la interfaz Product
  // allProducts: { razr: Product[], edge: Product[] } = {
  //   razr: [
  //     { name: 'Motorola Razr 50 Ultra', description: 'Pantalla externa de 4” y 165 Hz', price: '$ 1.999.999', image: 'path_to_image1' },
  //     { name: 'Motorola Razr 40', description: 'Pantalla externa de 4"', price: '$ 1.499.999', image: 'path_to_image2' },
  //     { name: 'Motorola Razr 2023', description: 'Pantalla externa de 4"', price: '$ 1.299.999', image: 'path_to_image3' }
  //   ],
  //   edge: [
  //     { name: 'Motorola Edge 30', description: 'Cámara y rendimiento increíbles', price: '$ 1.899.999', image: 'path_to_image4' },
  //     { name: 'Motorola Edge 40', description: 'Pantalla OLED de 144 Hz', price: '$ 1.799.999', image: 'path_to_image5' },
  //     { name: 'Motorola Edge 50', description: 'Carga rápida y batería duradera', price: '$ 1.699.999', image: 'path_to_image6' }
  //   ]
  // };



  
  showFamily(_family: 'razr' | 'edge') {
    this.family = this.dataPhone;
    this.currentSlide = 0; // Reiniciar el carrusel
  }

  nextSlide() {
    if (this.currentSlide < this.family.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Regresa al primer producto si está en el último
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.family.length - 1; // Va al último producto si está en el primero
    }
  }




  filteredProducts = this.family;

  // Función para filtrar el array por categoría
  filterProducts(family: 'razr' | 'edge') {
    this.filteredProducts = this.family.filter(product => product.model === family);
  }
}
