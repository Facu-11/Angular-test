import { Component, input } from '@angular/core';
import { Camara } from '../../../Core/iphone-product';

@Component({
  selector: 'app-comparador-camaras',
  standalone: true,
  imports: [],
  templateUrl: './camaras.component.html',
  styleUrl: './camaras.component.css'
})
export class CamarasComponent {


  phoneCamera = input.required<Camara>();

}
