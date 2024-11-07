import { Component, input, Input, OnInit, output } from '@angular/core';
import { IphoneProductColorImgs, IphoneImagenColor } from '../../Core/iphone-product';
import { phoneDetails } from '../../Core/iphoneDetails';
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-img-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-component.component.html',
  styleUrl: './img-component.component.css'
})
export class ImgComponentComponent implements OnInit{

  phone = input.required<IphoneProductColorImgs>();
  colorSelected = output<string>();

  phonesDetails: Array<phoneDetails> = []
  phonesFamily: Array<phoneDetails> = []

  images:Array<string>=[];
  mainImageUrl: string = ""; // Imagen principal inicial
  selectedImageIndex: number = 0;

  constructor(private data: StaticDataSvService) {
    console.log(data.getPhoneAndImgColorsData());
  }

  fnGetImgSets(color: string): IphoneImagenColor {
    return this.phone().imagenes.filter((set) => { return set.imgColor == color })[0];
  }

  fnSetColors(color: string) {
    return Object.values(this.fnGetImgSets(color)).filter(
      e => e != color
    );
  }

  //output fn
  fnSelectColor(color:string){
    this.colorSelected.emit(color);
  }



  ngOnInit(): void {
    this.images = this.fnSetColors("green");
    this.mainImageUrl  = this.images[0];

  }

 
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