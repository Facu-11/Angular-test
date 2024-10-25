import { CommonModule, NgFor } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-comparador-almacenamiento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './almacenamiento.component.html',
  styleUrl: './almacenamiento.component.css'
})
export class AlmacenamientoComponent {

  phoneStorage = input.required<Array<string>>();

}
