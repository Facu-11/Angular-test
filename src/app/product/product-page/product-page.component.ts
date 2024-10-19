import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductGalleryComponent } from "../product-gallery/product-gallery.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductGalleryComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  product = {
    name: 'Apple iPhone 13 A2482 (Desbloqueado en EE.UU.) Azul',
    mainImage: 'https://picsum.photos/400/400?random=1',
    thumbnails: [
      'https://picsum.photos/400/400?random=1',
      'https://picsum.photos/400/400?random=1',
      'https://picsum.photos/400/400?random=1'


    ],
    lastSoldPrice: 392,
    buyNowPrice: 364,
    availableColors: ['blue', 'red', 'green', 'black']
  };

  

  selectedColor: string = 'blue'; // Color por defecto
  currentImage: string = 'assets/images/iphone-13-blue.png'; // Imagen por defecto
  
  mainImage: string = 'assets/iphone-main.jpg'; // Imagen principal inicial
  thumbnails: string[] = [
    'assets/iphone-thumbnail1.jpg',
    'assets/iphone-thumbnail2.jpg',
    'assets/iphone-thumbnail3.jpg',
    'assets/iphone-thumbnail4.jpg'
  ];
  selectedSize: string = 'Todo';

  // Método para cambiar la imagen principal cuando se hace clic en una miniatura
  changeMainImage(imageUrl: string): void {
    this.mainImage = imageUrl;
  }

  // Método para manejar el cambio de tamaño del producto
  onSizeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;  // Aseguramos que target es de tipo HTMLSelectElement
    this.selectedSize = selectElement.value;
  }



   // Método para cambiar el color seleccionado
  onColorChange(color: string): void {
    this.selectedColor = color;
    this.updateImage(); // Actualiza la imagen según el color seleccionado
  }
  // Método para actualizar la imagen según el color
  private updateImage(): void {
    this.currentImage = `assets/images/iphone-13-${this.selectedColor}.png`;
  }
  
}
