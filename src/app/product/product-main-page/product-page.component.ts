import { Component, OnInit } from '@angular/core';
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { phoneDetails } from '../../Core/iphoneDetails';
import { IphoneProduct, IphoneProductColorImgs } from '../../Core/iphone-product';
import { CommonModule } from '@angular/common';
import { PhoneDetailsComponent } from '../../phoneComparator-page/templates/phone-details/phone-details.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})

export class ProductPageComponent implements OnInit{

  phone: IphoneProductColorImgs;

  phonesDetails: Array<phoneDetails> = []
  phonesFamily: Array<phoneDetails> = []

  constructor(private data: StaticDataSvService) {

    this.phone = data.getPhoneAndImgColorsData()[0];
    this.phonesDetails = data.getData();

  }

  ngOnInit(): void {
    console.log(this.fnGetImgSets());
  }

  fnGetImgSets(){
    
    return this.phone.imagenes.filter((set)=>{

        if(set.imgColor == "red"){
          return set;
        }
        return null;
    });

  }

  images = [];

  mainImageUrl: string = this.images[0]; // Imagen principal inicial
  selectedImageIndex: number = 0;

  // Cambiar la imagen principal al hacer clic en una miniatura
  setMainImage(index: number): void {
    this.mainImageUrl = this.images[index];
    this.selectedImageIndex = index;
  }

  // Navegar a la imagen anterior
  prevImage(): void {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
      this.mainImageUrl = this.images[this.selectedImageIndex];
    }
  }

  // Navegar a la siguiente imagen
  nextImage(): void {
    if (this.selectedImageIndex < this.images.length - 1) {
      this.selectedImageIndex++;
      this.mainImageUrl = this.images[this.selectedImageIndex];
    }
  }

}