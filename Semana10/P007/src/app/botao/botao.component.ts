import { Component, EventEmitter, Output } from '@angular/core';
import { ComunicacaoService } from '../comunicacao.service';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css',
})
export class BotaoComponent {
  constructor(private comunicacaoService: ComunicacaoService) {}

  adiciona(): void {
    this.comunicacaoService.adicionaVeiculo();
  }
}
