import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valor-propriedade',
  standalone: true,
  imports: [],
  templateUrl: './valor-propriedade.component.html',
  styleUrl: './valor-propriedade.component.css'
})
export class ValorPropriedadeComponent {
  @Input() valor: any;

}
