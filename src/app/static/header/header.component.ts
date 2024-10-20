import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild } from '@angular/core';

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

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
