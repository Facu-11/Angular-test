import { CommonModule } from '@angular/common';
import { Component,input,Input } from '@angular/core';
import { HeaderComponent } from "../../static/header/header.component";
import { FooterComponent } from "../../static/footer/footer.component";
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { phoneDetails } from '../../Core/iphoneDetails';
import { IphoneProduct } from '../../Core/iphone-product';
import { ProductContainerComponent } from "../../sec-products/product-container/product-container.component";

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ProductContainerComponent],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css'
})
export class ProductGalleryComponent  {

  phone:IphoneProduct;

  constructor(private data: StaticDataSvService){

    this.phone = data.getPhoneData()[0];

  }

  subTitulo:string = "hola";
}
 