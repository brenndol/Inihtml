import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { ComunicacaoService } from '../comunicacao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css',
})
export class PropriedadesComponent {
  subscription: Subscription = new Subscription();
  atributos: string[] = [];

  @Input()
  title = '';

  @Output() buscaPropriedadeRealizada = new EventEmitter<string>();

  constructor(
    private elemento: ElementRef,
    private renderizador: Renderer2,
    private comunicacaoService: ComunicacaoService,
  ) {}
  ngOnInit(): void {
    this.subscription = this.comunicacaoService
      .getAtributos()
      .subscribe((data) => {
        this.atributos = data;
      });
  }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderizador.setStyle(
      this.elemento.nativeElement,
      'box-shadow',
      '2px 2px 10px 2px rgba(147, 8, 207, 0.5)',
    );
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderizador.setStyle(
      this.elemento.nativeElement,
      'box-shadow',
      '2px 2px 10px 2px rgba(147, 8, 207, 0)',
    );
  }
  buscaPropriedade(atributo: string): void {
    this.comunicacaoService.buscaValuePropriedade(atributo);
  }
}
