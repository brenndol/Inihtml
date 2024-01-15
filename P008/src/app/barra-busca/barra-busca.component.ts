import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-barra-busca',
  standalone: true,
  imports: [],
  templateUrl: './barra-busca.component.html',
  styleUrl: './barra-busca.component.css'
})
export class BarraBuscaComponent {
  @Output() searchRequested = new EventEmitter();

  searchTerm: string = '';

  onSearch(): void {
    this.searchRequested.emit(this.searchTerm);
  }

}
