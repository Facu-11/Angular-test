import { Component, input } from '@angular/core';
import { phoneDetails } from '../../Core/iphoneDetails';

@Component({
  selector: 'app-product-data',
  standalone: true,
  imports: [],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css'
})
export class ProductDataComponent {
  phoneDetails= input.required<phoneDetails>();
  
  
}
