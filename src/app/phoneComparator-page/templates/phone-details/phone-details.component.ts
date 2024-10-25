import { Component, input } from '@angular/core';
import { phoneDetails } from '../../../Core/iphoneDetails';
import { IphoneProduct } from '../../../Core/iphone-product';

@Component({
  selector: 'app-phone-details',
  standalone: true,
  imports: [],
  templateUrl: './phone-details.component.html',
  styleUrl: './phone-details.component.css'
})
export class PhoneDetailsComponent {

  phone:IphoneProduct ={
    "modelo": "",
    "procesador": {
      "tipo": "",
      "cantidad_nucleos": 0,
      "potencia": ""
    },
    "camara": {
      "trasera": {
        "resolucion": ""
      },
      "frontal": {
        "resolucion": ""
      }
    },
    "almacenamiento": [],
    "pantalla": {
      "medidas": ""
    },
    "otros": {
      "resistente_agua_polvo": "",
      "tipo_sim": [],
      "nfc": false,
      "pin_carga": "",
      "viene_con_cargador": false
    },
    "imagenes": []
  }
  

  phoneInput = input.required<IphoneProduct>();

  testFn(){
    console.log(this.phoneInput);
  }

}
