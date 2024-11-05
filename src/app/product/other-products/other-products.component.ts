import { Component } from '@angular/core';
import { phoneDetails } from '../../Core/iphoneDetails';
import { CommonModule } from '@angular/common';
import { ProductDataComponent } from '../../sec-products/product-data/product-data.component';


@Component({
  selector: 'app-other-products',
  standalone: true,
  imports: [CommonModule,ProductDataComponent],
  templateUrl: './other-products.component.html',
  styleUrl: './other-products.component.css'
})
export class OtherProductsComponent {

  titlesCarrouselPosition: number = 0;
  phonesCarrouselPosition: number = 100;

  phonesDetails: Array<phoneDetails> = []
  phonesFamily: Array<phoneDetails> = []

  objPhoneCardInfo = { "width": 400 };



  /* bar menu */
  hover: boolean = false;

  /* click style*/
  varLastBtnPressed: number = 0;
  arButtons: Array<boolean> = [false, false, false, false, false, false];




ngOnInit() {

  this.fnfiltro(11, 0);

}

fnReadScreenInfo() {
  if (window.innerWidth > 600) {
    this.objPhoneCardInfo.width = 400;
  } else if (window.innerWidth <= 600) {
    this.objPhoneCardInfo.width = window.innerWidth;
  }
}

fnGetElementWidth(width: number) {
  this.objPhoneCardInfo.width = width;
}

fnfiltro(selectedFamily: number, btnNum: number) {

  this.phonesFamily = this.phonesDetails.filter((phone) => {
    return phone.family == selectedFamily;
  })

  this.arButtons.fill(false);
  this.arButtons[btnNum] = !this.arButtons[btnNum];
}

/* titles carrousel*/
fnDesplAder() {
  this.titlesCarrouselPosition = this.titlesCarrouselPosition >= 100 ? this.titlesCarrouselPosition : this.titlesCarrouselPosition += 100;
}

fnDesplAizq() {
  this.titlesCarrouselPosition = this.titlesCarrouselPosition <= (window.innerWidth - (300 * 4)) ? this.titlesCarrouselPosition : this.titlesCarrouselPosition -= 100
}

fnHover(value: boolean) {
  this.hover = value;
}




  /* phones carrousel*/


  fnDespPhonCarroLeft() {
    this.phonesCarrouselPosition = this.phonesCarrouselPosition >= 0 ? this.phonesCarrouselPosition : this.phonesCarrouselPosition += this.objPhoneCardInfo.width;
  }


  fnDespPhonCarroRight() {
    this.phonesCarrouselPosition = this.phonesCarrouselPosition <=
      (-(this.objPhoneCardInfo.width * (this.phonesFamily.length - 1)))
      ? this.phonesCarrouselPosition : this.phonesCarrouselPosition -= this.objPhoneCardInfo.width

  }
}
