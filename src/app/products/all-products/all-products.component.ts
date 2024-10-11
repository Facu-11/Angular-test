import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  products = [
    { name: 'Black Leather Belt', price: 95, image: "https://picsum.photos/400/400?random=1" },
    { name: 'Smartphone Case', price: 55, image: "https://picsum.photos/400/400?random=1" },
    { name: 'Leather Gloves', price: 120, image: "https://picsum.photos/400/400?random=1" },
    { name: 'Flash Drive', price: 15, image: "https://picsum.photos/400/400?random=1" },
    { name: 'Black Courier', price: 395, image: "https://picsum.photos/400/400?random=1" },
    { name: 'Black Duffle', price: 420, image: "https://picsum.photos/400/400?random=1" },
    { name: 'Laptop Holster', price: 195, image: "https://picsum.photos/400/400?random=1" },
    { name: 'Black Workbag', price: 395, image: "https://picsum.photos/400/400?random=1" },
    { name: 'Wallet', price: 95, image: "https://picsum.photos/400/400?random=1" }
  ];
}
