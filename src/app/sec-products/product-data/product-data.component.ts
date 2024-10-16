import { Component, input } from '@angular/core';
import { PhoneDetailsComponent } from '../../phoneComparator-page/templates/phone-details/phone-details.component';
import { phoneDetails } from '../../Core/iphoneDetails';

@Component({
  selector: 'app-product-data',
  standalone: true,
  imports: [],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css'
})
export class ProductDataComponent {

  phoneInput = input.required <phoneDetails>();

}
