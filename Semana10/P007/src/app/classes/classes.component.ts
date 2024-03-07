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
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
})
export class ClassesComponent {
  categoriasService: string[] = [];
  subscription: Subscription = new Subscription();
  @Input()
  categorias: string[] = [];

  @Input()
  title = '';

  constructor(
    private elemento: ElementRef,
    private renderizador: Renderer2,
    private comunicacaoService: ComunicacaoService,
  ) {}
  buscaCategoria(categoria: string): void {
    this.comunicacaoService.buscarVeiculos(categoria);
  }
  ngOnInit(): void {
    this.renderizador.setStyle(
      this.elemento.nativeElement,
      'box-shadow',
      '2px 2px 10px 2px rgba(147, 8, 207, 0)',
    );
    this.subscription = this.comunicacaoService
      .getBuscaRealizada()
      .subscribe((data) => {
        this.categoriasService = Object.keys(data); // Aqui você recebe os dados emitidos pelo Subject
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
}
