import { CommonModule } from '@angular/common';
import { AfterViewInit, ApplicationRef, ChangeDetectorRef, Component, inject, Inject, } from '@angular/core';
import { first, interval } from 'rxjs';

interface photoObj {
  url: string,
  title: string,
  alt: string
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})

export class BannerComponent {

  private _changeDetector = inject(ChangeDetectorRef);
  private _applicationRef = inject(ApplicationRef);

  // imgs: photoObj = {
  //   url: '/static_imgs/banners/banner_dark.png',
  //   title: 'Banner Dark',
  //   alt: 'Dark banner'
  // };

  imgs: photoObj = {
    url: '/static_imgs/banners/banner_light.png',
    title: 'Banner White',
    alt: 'Lighting banner'
  }


  phones: Array<photoObj> = [
  {
    url: '/imgs_colores_iphone/ip15_pro_allColors.png',
    title: 'iphone16',
    alt: 'iphone14'
  }, {
    url: '/imgs_colores_iphone/all-colors-ip12.png',
    title: 'iphone15',
    alt: 'ipone12'
  },{
    url: '/iphonesAllPictures/ip16_pro_proMax/ip16_pro_max_desierto_titanio/ip16_proMax_desertTitanium_front.jpg',
    title: 'iphone16',
    alt: 'ipone16ProMax'
  }
]
  

  index: number = 0;
  counter: number = 0;

  constructor() {

    this._applicationRef.isStable.pipe(first((isStable) => isStable))
      .subscribe(() => {

        interval(500).subscribe(() => {this.timerAdmin()})

      });

  }

  timerAdmin() {

    if (this.counter == 10) {
      this.nextImg();
      this.counter = 0;
    }
    this.counter++;
  }

  nextImg() {
    this.index = (this.index + 1) % this.phones.length;
    this._changeDetector.detectChanges();
  }
  restartClock() {
    this.counter = 0;
  }

}
