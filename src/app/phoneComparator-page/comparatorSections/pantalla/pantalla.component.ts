import { Component, input } from '@angular/core';
import { Pantalla } from '../../../Core/iphone-product';

@Component({
  selector: 'app-comparador-pantalla',
  standalone: true,
  imports: [],
  templateUrl: './pantalla.component.html',
  styleUrl: './pantalla.component.css'
})
export class PantallaComponent {


  phoneScreen = input.required<Pantalla>();

}
