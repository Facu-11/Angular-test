import { CommonModule } from '@angular/common';
import { Component,input,Input } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css'
})
export class ProductGalleryComponent  {
  @Input() product: any; // Recibe el producto desde el componente padre.
  @Input() selectedColor: any;
  @Input() currentImage: any;
  @Input() onColorChange: any;
  @Input() updateImage: any;
  @Input() changeMainImage: any;
  @Input() onSizeChange: any;
  @Input() mainImage: any;
  @Input() thumbnails: any;
   
  
}
