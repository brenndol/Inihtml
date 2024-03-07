import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'arrumandoWiki'
})
export class ArrumandoWikiPipe implements PipeTransform {

  transform(texto: string, termoPesquisado: string): string {
    if (!termoPesquisado || !texto) {
      return texto;
    }

    const regex = new RegExp(termoPesquisado, 'gi');
    return texto.replace(regex, `<strong>$&</strong>`);
  }
}

