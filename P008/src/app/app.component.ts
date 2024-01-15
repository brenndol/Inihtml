import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WikipediaService } from './services/wikipedia.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P008';
  searchResults: any[] = [];

  constructor(private wikipediaService: WikipediaService) {}

  onSearchRequested(term: string): void {
   
  }
}
