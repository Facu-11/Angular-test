import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponentComponent } from '../img-component/img-component.component';
import { HeaderComponent } from "../../static/header/header.component";
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { phoneColorData } from '../DTOs/phoneColorData';
import { IphoneProductColorImgs } from '../../Core/iphone-product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ImgComponentComponent, HeaderComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})

export class ProductPageComponent implements OnInit {

  @Input('id') phoneId!: string;

  phoneSelected: IphoneProductColorImgs = <IphoneProductColorImgs>{};
  phoneData: phoneColorData = <phoneColorData>{};

  constructor(private data: StaticDataSvService) {
    //va a llegar si o si uno solo, por efectos practicos pongo el 0
    //del 0 al 17
    //falta imagenes del iphone 15 y el 15 plus
  }

  ngOnInit(): void {
    console.log(this.phoneId);
    this.phoneSelected = this.fnGetPhoneFromModel(this.data.getPhoneAndImgColorsData(), this.phoneId);
    this.fnLoadImgData();
  }

  fnGetPhoneFromModel(phones: Array<IphoneProductColorImgs>, phoneModel: string) {
    return phones.filter((phone) =>{return phone.modelo == phoneModel})[0];
  }

  fnLoadImgData() {
    this.phoneData.phoneModel = this.phoneSelected.modelo;
    this.phoneData.phoneDescription = this.phoneSelected.pantalla.medidas;
    this.phoneData.phonoColorsAvalible = this.fnGetColorsAvalible();
    this.phoneData.phoneImgColorsSetSelected = this.fnGetAllIdemColoredImgs(this.phoneData.phonoColorsAvalible[0]);
  }

  fnGetColorsAvalible(): Array<string> {
    return this.phoneSelected.imagenes.map(set => set.imgColor);
  }

  fnGetAllIdemColoredImgs(color: string) {
    return Object.values(this.phoneSelected.imagenes.filter(img => img.imgColor == color)[0]).filter(set => set != color);
  }

  fnColorSelector(color: string): void {
    this.phoneData.phoneImgColorsSetSelected = this.fnGetAllIdemColoredImgs(color);
  }

  

}