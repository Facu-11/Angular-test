import { Component } from '@angular/core';
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { phoneDetails } from '../../Core/iphoneDetails';
import { CommonModule } from '@angular/common';
import { ProductDataComponent } from '../product-data/product-data.component';

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [CommonModule,ProductDataComponent],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css'
})
export class ProductContainerComponent {

  /*
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
  */

  phonesDetails:Array<phoneDetails>=[]
  phonesFamily: Array<phoneDetails>=[]

  constructor(private data:StaticDataSvService ){
    this.phonesDetails=data.getData();
  }

  currentSlide = 0;
  isMobileView = false;

  ngOnInit() {
    // this.products = this.allProducts.razr; // Mostrar productos de la familia Razr por defecto
    // this.checkMobileView();
  }

  fnfiltro(selectedFamily:number){
    this.phonesFamily=this.phonesDetails.filter((phone)=>{
     return phone.family == selectedFamily
    })

    // console.log(this.phonesDetails.filter((phone)=>{
    //   return phone.family == 10
    //   // console.log(phone.family+" "+ selectedFamily)
    //  }))
  }


  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   this.checkMobileView();
  // }

  // checkMobileView() {
  //   this.isMobileView = window.innerWidth <= 768;
  // }

  // nextSlide() {
  //   if (this.currentSlide < this.products.length - 1) {
  //     this.currentSlide++;
  //   } else {
  //     this.currentSlide = 0; // Regresa al primer producto si está en el último
  //   }
  // }

  // prevSlide() {
  //   if (this.currentSlide > 0) {
  //     this.currentSlide--;
  //   } else {
  //     this.currentSlide = this.products.length - 1; // Va al último producto si está en el primero
  //   }
  // }

  // showFamily(family: 'razr' | 'edge') {
  //   this.products = this.allProducts[family];
  //   this.currentSlide = 0; // Reiniciar el carrusel
  // }
  
}