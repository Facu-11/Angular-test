import { Component, OnInit } from '@angular/core';
import { StaticDataSvService } from '../services/staticDataGetterSv/static-data-sv.service';
import { VideoBanner } from '../Core/videoBanner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit{


  bannerVi!:  Array<VideoBanner>;

  constructor(private staticDataSvService: StaticDataSvService) {}

  ngOnInit(): void {
    this.bannerVi = this.staticDataSvService.getBannerVideo();
  }


  onVideoEnd(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.pause(); // Pausar el video al final
  }
  
}
