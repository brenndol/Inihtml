import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'negrito',
  standalone: true
})
export class NegritoPipe implements PipeTransform {

  transform(texto: string, termoPesquisado: string): string {
    return texto;
  }

}
