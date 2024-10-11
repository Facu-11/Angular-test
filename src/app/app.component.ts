import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./static/header/header.component";
import { FooterComponent } from "./static/footer/footer.component";
import { BannerComponent } from "./banner/banner.component";
import { InfoProdructsComponent } from "./info-prodructs/info-prodructs.component";
import { InfoPayComponent } from "./info-pay/info-pay.component";
import { WhatsappComponent } from "./whatsapp/whatsapp.component";
import { HistoryPageComponent } from "./history-page/history-page.component";
import { ThemeToggleComponent } from "./theme-toggle/theme-toggle.component";

import { BannerProductsComponent } from './products/banner-products/banner-products.component';
import { AllProductsComponent } from "./products/all-products/all-products.component";
import { ProductPageComponent } from './product/product-page/product-page.component';
import { ProductGalleryComponent } from './product/product-gallery/product-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BannerComponent, InfoProdructsComponent, InfoPayComponent, WhatsappComponent, HistoryPageComponent, ThemeToggleComponent, BannerProductsComponent, AllProductsComponent,ProductPageComponent,ProductGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Dinasty';
  
}
