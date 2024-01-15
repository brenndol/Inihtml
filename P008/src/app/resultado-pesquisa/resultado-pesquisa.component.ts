import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-pesquisa',
  standalone: true,
  imports: [],
  templateUrl: './resultado-pesquisa.component.html',
  styleUrl: './resultado-pesquisa.component.css'
})
export class ResultadoPesquisaComponent {
  @Input() searchResults: any[] = [];

}
