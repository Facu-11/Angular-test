import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {

  isMenuOpen = false;
  iconCross = "imgs/closes.png";


  openMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

}
