import { Component } from '@angular/core';
import { ComunicacaoService } from './comunicacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'P007';
  dados: any = {};
  veiculos: string[] = [];
  categoria = '';
  atributos: string[] = [];
  veiculo = '';
  value = '';
  veiculosAdicionados: string[] = [];
  propriedade: string = '';
  salve: string = '';

  constructor(private comunicacaoService: ComunicacaoService) {}

  ngOnInit(): void {
    this.comunicacaoService.getSalve().subscribe((data) => {
      this.salve = data;
      if (!this.veiculosAdicionados.includes(this.salve) && this.salve != '') {
        this.veiculosAdicionados.push(this.salve);
      }
    });
  }
}
