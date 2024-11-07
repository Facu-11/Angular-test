import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../static/header/header.component';
import { FooterComponent } from '../static/footer/footer.component';
import { BannerComponent } from '../banner/banner.component';
import { HistoryPageComponent } from '../history-page/history-page.component';
import { InfoProdructsComponent } from '../info-prodructs/info-prodructs.component';
import { InfoPayComponent } from '../info-pay/info-pay.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { WhatsappComponent } from '../whatsapp/whatsapp.component';
import { FaqComponent } from '../faq/faq.component';
import { AllProductsComponent } from '../products/all-products/all-products.component';
import { ProductDataComponent } from '../sec-products/product-data/product-data.component';
import { ProductContainerComponent } from '../sec-products/product-container/product-container.component';
import { BannerProductsComponent } from '../products/banner-products/banner-products.component';
import { ProductGalleryComponent } from '../product/product-gallery/product-gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BannerComponent,
    HistoryPageComponent, InfoProdructsComponent, InfoPayComponent, BannerComponent,
    ThemeToggleComponent, WhatsappComponent, AllProductsComponent, ProductDataComponent,
    BannerProductsComponent, ProductGalleryComponent, ProductContainerComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  scroolOnTopOfPage:boolean = true;

  @HostListener('window:scroll', ['$event']) // for window scroll events
   fnScrool(cosa:Event){
    console.log(window.pageYOffset)
    if(window.pageYOffset==0){
      return true;
    }else{
      return false;
    }
    
  }

  
}
