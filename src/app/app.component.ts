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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BannerComponent, InfoProdructsComponent, InfoPayComponent, WhatsappComponent, HistoryPageComponent, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Dinasty';
  
}
