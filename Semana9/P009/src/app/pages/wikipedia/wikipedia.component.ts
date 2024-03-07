import { Component } from '@angular/core';
import { WikiServiceService } from './wiki-service.service';

interface Result {
  title: string;
  snippet: string;
  pageid: number;
}

@Component({
  selector: 'WikipediaComponent',
  template: `
  <div class="container">
    <h1>Consultando a Wiki API</h1>
    <!-- <input [(ngModel)]="query" placeholder="Digite sua pesquisa aqui"> -->
    <button (click)="search()">Buscar</button>

    <div *ngIf="results.length > 0">
      <h2>Resultados para "{{ query }}"</h2>
      <div *ngFor="let result of results">
        <h3>{{result.title}}</h3>
        <!-- <p [innerHTML]="result.snippet | arrumandoWiki:query"></p> -->
        <a [href]="result.pageid" target="_blank">Leia mais...</a>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./wikipedia.component.scss']
})

export class WikipediaComponent {
  query = '';
  results: Result[] = [];

  constructor(private wikiService: WikiServiceService) {}

  search() {
    this.wikiService.getResults(this.query)
      .subscribe(data => {
        this.results = data.query.search.map((result: Result) => ({
          title: result.title,
          snippet: result.snippet,
          pageid: `https://en.wikipedia.org/?curid=${result.pageid}`
        }));
      });
  }
}
