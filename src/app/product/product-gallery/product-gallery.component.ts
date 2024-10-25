import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../static/header/header.component";
import { FooterComponent } from '../../static/footer/footer.component';
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { IphoneProduct } from '../../Core/iphone-product';
import { phoneDetails } from '../../Core/iphoneDetails';
import { ProductDataComponent } from '../../sec-products/product-data/product-data.component';


@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [CommonModule, HeaderComponent,FooterComponent,ProductDataComponent],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css'
})
export class ProductGalleryComponent  {

phone: IphoneProduct;



titlesCarrouselPosition:number = 0;
phonesCarrouselPosition:number = 100;

isMobileView:boolean = false;

phonesDetails:Array<phoneDetails>=[]
phonesFamily: Array<phoneDetails>=[]

objPhoneCardInfo={"width":400};

/* bar menu */
hover:boolean = false;

/* click style*/
varLastBtnPressed:number=0;
arButtons:Array<boolean>=[false,false,false,false,false,false]; 






 constructor(private data : StaticDataSvService){

  this.phone = data.getPhoneData()[0];


  this.phonesDetails=data.getData();
 }

   subTitulo:string = "hola";
   descrip:string = "Descripcion del producto";


   images = [
    "https://picsum.photos/400/400?random=1",
    "https://picsum.photos/400/400?random=1",
    "https://picsum.photos/400/400?random=1"
  ];



  


 
 mainImageUrl: string = this.images[0]; // Imagen principal inicial
  selectedImageIndex: number = 0;

  // Cambiar la imagen principal al hacer clic en una miniatura
  setMainImage(index: number): void {
    this.mainImageUrl = this.images[index];
    this.selectedImageIndex = index;
  }

  // Navegar a la imagen anterior
  prevImage(): void {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
      this.mainImageUrl = this.images[this.selectedImageIndex];
    }
  }

  // Navegar a la siguiente imagen
  nextImage(): void {
    if (this.selectedImageIndex < this.images.length - 1) {
      this.selectedImageIndex++;
      this.mainImageUrl = this.images[this.selectedImageIndex];
    }
  }





  ngOnInit() {

    this.fnfiltro(11,0);

  }

  fnReadScreenInfo(){
    if(window.innerWidth>600){
      this.objPhoneCardInfo.width=400;
    }else if(window.innerWidth<=600){
      this.objPhoneCardInfo.width=window.innerWidth;
    }
  }

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
