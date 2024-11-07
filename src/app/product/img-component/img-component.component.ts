import { Component, input, Input, OnInit, output } from '@angular/core';
import { IphoneProductColorImgs, IphoneImagenColor } from '../../Core/iphone-product';
import { phoneDetails } from '../../Core/iphoneDetails';
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { CommonModule } from '@angular/common';
import { phoneColorData } from '../DTOs/phoneColorData';

@Component({
  selector: 'app-product-img-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-component.component.html',
  styleUrl: './img-component.component.css'
})
export class ImgComponentComponent implements OnInit{

  phoneData = input.required<phoneColorData>()
  colorSelected = output<string>();

  mainImageUrl: string = ""; // Imagen principal inicial
  selectedImageIndex: number = 0;

  constructor(private data: StaticDataSvService) {
  
  }

  //output fn
  fnSelectColor(color:string){
    this.colorSelected.emit(color);
  }

  ngOnInit(): void {
    this.mainImageUrl = this.phoneData().phoneImgColorsSetSelected[0];
  }

  // Cambiar la imagen principal al hacer clic en una miniatura
  setMainImage(index: number): void {
    this.mainImageUrl = this.phoneData().phoneImgColorsSetSelected[index];
    this.selectedImageIndex = index;
  }

  // Navegar a la imagen anterior
  prevImage(): void {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
      this.mainImageUrl = this.phoneData().phoneImgColorsSetSelected[this.selectedImageIndex];
    }
  }

  // Navegar a la siguiente imagen
  nextImage(): void {
    if (
      this.selectedImageIndex < this.phoneData().phoneImgColorsSetSelected.length - 1) {
      this.selectedImageIndex++;
      this.mainImageUrl = this.phoneData().phoneImgColorsSetSelected[this.selectedImageIndex];
    }
  }

}