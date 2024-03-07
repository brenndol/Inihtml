import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
  <div class="container">
    <router-outlet></router-outlet>
  </div>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P009';
}
