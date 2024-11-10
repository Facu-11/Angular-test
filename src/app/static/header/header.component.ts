import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, input, viewChild } from '@angular/core';

interface objImg {
  url: string;
  name: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {

  Icon: objImg = { url: 'icons/fake-logo.png', name: 'Dinastia Iphone' };

  isMenuOpen: boolean = false;
  isNotOnTopOfPage:boolean = false;

  @HostListener('window:scroll',["$event"])
  fnScrolled(){
    this.isNotOnTopOfPage=(window.pageYOffset>30);
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
