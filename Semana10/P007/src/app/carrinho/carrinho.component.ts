import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComunicacaoService } from '../comunicacao.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
})
export class CarrinhoComponent {
  constructor(private comunicacaoService: ComunicacaoService) {}

  buscarDados(arquivo: string): void {
    this.comunicacaoService.buscarDados(arquivo);
  }
}
