import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponentComponent } from '../img-component/img-component.component';
import { HeaderComponent } from "../../static/header/header.component";
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { IphoneProductColorImgs } from '../../Core/iphone-product';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ImgComponentComponent, HeaderComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})

export class ProductPageComponent {


  testPhone:IphoneProductColorImgs;

  constructor(private data: StaticDataSvService){
    this.testPhone = data.getPhoneAndImgColorsData()[0];
  }

  fnColorSelector(){
    
  }

}