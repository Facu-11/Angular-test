import { Component } from '@angular/core';
import { IphoneProduct } from '../../Core/iphone-product';
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';


@Component({
  selector: 'app-technical-sheet',
  standalone: true,
  imports: [],
  templateUrl: './technical-sheet.component.html',
  styleUrl: './technical-sheet.component.css'
})
export class TechnicalSheetComponent {

  phone : IphoneProduct;


  constructor(private data: StaticDataSvService) {

    this.phone = data.getPhoneData()[0];


  }
  
  fnChangeTrues(value:boolean):string{

    return value? "Si":"No";
  }

}
