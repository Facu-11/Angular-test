import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-products',
  standalone: true,
  imports: [],
  templateUrl: './banner-products.component.html',
  styleUrl: './banner-products.component.css'
})
export class BannerProductsComponent {
  products = [
    { name: 'Black Leather Belt', price: 95, image: 'assets/belt.png' },
    { name: 'Smartphone Case', price: 55, image: 'assets/smartphone-case.png' },
    { name: 'Leather Gloves', price: 120, image: 'assets/gloves.png' },
    { name: 'Flash Drive', price: 15, image: 'assets/flash-drive.png' },
    { name: 'Black Courier', price: 395, image: 'assets/courier.png' },
    { name: 'Black Duffle', price: 420, image: 'assets/duffle.png' },
    { name: 'Laptop Holster', price: 195, image: 'assets/laptop-holster.png' },
    { name: 'Black Workbag', price: 395, image: 'assets/workbag.png' },
    { name: 'Wallet', price: 95, image: 'assets/wallet.png' }
  ];
}
