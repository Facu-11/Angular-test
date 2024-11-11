import { Component, input, OnInit } from '@angular/core';
import { bannerPhone } from '../../../Core/banners-data';
import { StaticDataSvService } from '../../../services/staticDataGetterSv/static-data-sv.service';
import { CommonModule } from '@angular/common';
import { VideoBanner } from '../../../Core/videoBanner';

@Component({
  selector: 'app-banner-static',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-static.component.html',
  styleUrl: './banner-static.component.css'
})


export class BannerStaticComponent implements OnInit {
   
  bannerDataIphone: bannerPhone[] = [];
  
  bannerVi!:  Array<VideoBanner>;

  constructor(private staticDataService: StaticDataSvService) {}

  ngOnInit(): void {
    
    this.bannerDataIphone = this.staticDataService.getBannerStatic();

    this.bannerVi = this.staticDataService.getBannerVideo();
  }
  
  // toRight: boolean = false;
  
  toRight = input(false);


  onVideoEnd(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.pause(); // Pausar el video al final
  }
  

}
