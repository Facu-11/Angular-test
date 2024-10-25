import { CommonModule } from '@angular/common';
import { Component, ElementRef, input, OnInit, output } from '@angular/core';
import { ProductGalleryComponent } from "../product-gallery/product-gallery.component";
import { phoneDetails } from '../../Core/iphoneDetails';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductGalleryComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{

  phoneDetails= input.required<phoneDetails>();
  
  constructor(private elem: ElementRef){}


  elementWidth = output<number>();
  
  ngOnInit(): void {
    this.elementWidth.emit(this.elem.nativeElement.offsetWidth);
  }
  
  
}
