import { Component, ElementRef, input, OnInit, Output, output } from '@angular/core';
import { phoneDetails } from '../../Core/iphoneDetails';
import { IphoneProductColorImgs } from '../../Core/iphone-product';

@Component({
  selector: 'app-product-data',
  standalone: true,
  imports: [],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css'
})
export class ProductDataComponent implements OnInit{
  phoneDetails= input.required<IphoneProductColorImgs>();
  
  constructor(private elem: ElementRef){}


  elementWidth = output<number>();
  randomNum:number = 0;
  
  ngOnInit(): void {
    this.elementWidth.emit(this.elem.nativeElement.offsetWidth);
    this.randomNum = Math.floor(Math.random() * (this.phoneDetails().imagenes.length - 1));
   
    console.log(this.phoneDetails().modelo+"  "+this.randomNum);
  }
}
