import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, inject } from '@angular/core';
import { Scroll } from '@angular/router';

interface objImg {
  url: string;
  name: string;
}

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent {

  Icons:objImg= { url: 'icons/whatsapp.png', name: 'twitter'}
  isStuck=false;
  almendra:number = 0;
  
}
