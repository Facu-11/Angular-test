import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { phoneDetails } from '../../Core/iphoneDetails';
import { ProductDataComponent } from '../product-data/product-data.component';


@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [CommonModule,ProductDataComponent],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css'
})
export class ProductContainerComponent {

  titlesCarrouselPosition:number = 0;
  phonesCarrouselPosition:number = 0;

  isMobileView:boolean = false;

  phonesDetails:Array<phoneDetails>=[]
  phonesFamily: Array<phoneDetails>=[]

  objPhoneCardInfo={"width":400};
  
  /* bar menu */
  hover:boolean = false;

  /* click style*/
  varLastBtnPressed:number=0;
  arButtons:Array<boolean>=[false,false,false,false,false,false]; 
  
  constructor(private data:StaticDataSvService){
    this.phonesDetails=data.getData();
  }

  ngOnInit() {

    this.fnfiltro(11,0);

  }

  // fnReadScreenInfo(){
  //   if(window.innerWidth>600){
  //     this.objPhoneCardInfo.width=400;
  //   }else if(window.innerWidth<=600){
  //     this.objPhoneCardInfo.width=window.innerWidth;
  //   }
  // }

  fnGetElementWidth(width:number){
    this.objPhoneCardInfo.width=width;
  }

  fnfiltro(selectedFamily:number, btnNum:number){

    this.phonesFamily=this.phonesDetails.filter((phone)=>{
     return phone.family == selectedFamily;
    })

    this.arButtons.fill(false);
    this.arButtons[btnNum]=!this.arButtons[btnNum];
  }

  /* titles carrousel*/
  fnDesplAder(){
    this.titlesCarrouselPosition = this.titlesCarrouselPosition>=100? this.titlesCarrouselPosition:this.titlesCarrouselPosition+=100; 
  }

  fnDesplAizq(){
    this.titlesCarrouselPosition=this.titlesCarrouselPosition<=(window.innerWidth-(300*4))?this.titlesCarrouselPosition:this.titlesCarrouselPosition-=100
  }

  fnHover(value:boolean){
    this.hover = value;
  }


  /* phones carrousel*/


  fnDespPhonCarroLeft(){
    this.phonesCarrouselPosition=this.phonesCarrouselPosition>=0?this.phonesCarrouselPosition:this.phonesCarrouselPosition+=this.objPhoneCardInfo.width; 
  }

  fnDespPhonCarroRight(){
    this.phonesCarrouselPosition=this.phonesCarrouselPosition<=
    (-(this.objPhoneCardInfo.width*(this.phonesFamily.length-1)))
    ?this.phonesCarrouselPosition:this.phonesCarrouselPosition-=this.objPhoneCardInfo.width
  }

}