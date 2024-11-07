import { Component, input, OnInit } from '@angular/core';
import { bannerPhone } from '../../../Core/banners-data';
import { StaticDataSvService } from '../../../services/staticDataGetterSv/static-data-sv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-static',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-static.component.html',
  styleUrl: './banner-static.component.css'
})


export class BannerStaticComponent implements OnInit {
   
  bannerDataIphone: bannerPhone[] = [];

  constructor(private staticDataService: StaticDataSvService) {}

  ngOnInit(): void {
    
    this.bannerDataIphone = this.staticDataService.getBannerStatic();
  }
  
  // toRight: boolean = false;
  
  toRight = input(false);

}
