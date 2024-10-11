import { CommonModule } from '@angular/common';
import { AfterViewInit, ApplicationRef, ChangeDetectorRef, Component, inject, Inject, } from '@angular/core';
import { first, interval } from 'rxjs';

interface photoObj{
  url:string,
  title:string,
  alt:string
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

  imgs: photoObj = {
    url: '/static_imgs/banner_dark.png',
    title: 'Banner Dark',
    alt: 'Dark banner'
  };;

  index: number = 0;
  counter: number = 0;

  constructor() {

    // this._applicationRef.isStable.pipe(first((isStable) => isStable))
    //   .subscribe(() => {

    //     interval(1000).subscribe(() => {this.timerAdmin()})

    //   });

  }

  // timerAdmin() {

  //   if (this.counter == 10) {
  //     this.nextImg();
  //     this.counter = 0;
  //   }
  //   this.counter++;
  // }

  // nextImg() {
  //   this.index = (this.index + 1) % this.imgs.length;
  //   this._changeDetector.detectChanges();
  // }

  // prevImg() {
  //   this.index = (this.index - 1 + this.imgs.length) % this.imgs.length;
  // }

  restartClock(){
    this.counter = 0;
  }

}
