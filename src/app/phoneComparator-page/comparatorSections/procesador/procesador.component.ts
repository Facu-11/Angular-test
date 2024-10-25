import { Component, input } from '@angular/core';
import { Procesador } from '../../../Core/iphone-product';

@Component({
  selector: 'app-comparador-procesador',
  standalone: true,
  imports: [],
  templateUrl: './procesador.component.html',
  styleUrl: './procesador.component.css'
})
export class ProcesadorComponent {


    phoneCore = input.required<Procesador>();

}
