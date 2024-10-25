import { Component, input, OnInit } from '@angular/core';
import { Otros } from '../../../Core/iphone-product';

@Component({
  selector: 'app-comparador-otros',
  standalone: true,
  imports: [],
  templateUrl: './otros.component.html',
  styleUrl: './otros.component.css'
})
export class OtrosComponent implements OnInit {


  othersPhone = input.required<Otros>();

  constructor(){
  }

  ngOnInit(): void {
    // console.log(this.othersPhone());
  }

  fnChangeTrues(value:boolean):string{

      return value? "Si":"No";

  }

}
