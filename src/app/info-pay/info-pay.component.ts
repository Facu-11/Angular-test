import { Component } from '@angular/core';

interface objImg{

  url:string,
  name:string

}

@Component({
  selector: 'app-info-pay',
  standalone: true,
  imports: [],
  templateUrl: './info-pay.component.html',
  styleUrl: './info-pay.component.css'
})
export class InfoPayComponent {

  Icons:Array<objImg> = [
    { url: 'icons/bank.png', name: 'bank' },
    { url: 'icons/box.png', name: 'box' },
    { url: 'icons/shield.png', name: 'shield' },
    { url: 'icons/customer-support.png', name: 'customer-support' }
  ];;

}
