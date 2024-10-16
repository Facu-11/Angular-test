import { Component, input } from '@angular/core';
import { phoneDetails } from '../../../Core/iphoneDetails';

@Component({
  selector: 'app-phone-details',
  standalone: true,
  imports: [],
  templateUrl: './phone-details.component.html',
  styleUrl: './phone-details.component.css'
})
export class PhoneDetailsComponent {

  phone:phoneDetails ={
    family:0,
    model: 'null',
    camera: '',
    storage: '',
    battery: '',
    display: '',
    colors: [],
    price: ''
  };

  phoneInput = input.required<phoneDetails>();

  testFn(){
    console.log(this.phoneInput);
  }

}
