import { Component } from '@angular/core';
import { ObservableService } from './observable.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private valService: ObservableService) {}

  tarefas: string[] = []; 

  getNumeros(){
    const fonte = this.valService.getNumeros().subscribe( valor => {
      this.tarefas.push(valor.toString());
    }
    );
  }
}
