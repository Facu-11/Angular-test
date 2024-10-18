import { Component, ElementRef, input, OnInit, Output, output } from '@angular/core';
import { phoneDetails } from '../../Core/iphoneDetails';

@Component({
  selector: 'app-product-data',
  standalone: true,
  imports: [],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css'
})
export class ProductDataComponent implements OnInit{
  phoneDetails= input.required<phoneDetails>();
  
  constructor(private elem: ElementRef){}


  elementWidth = output<number>();
  
  ngOnInit(): void {
    this.elementWidth.emit(this.elem.nativeElement.offsetWidth);
  }
}
