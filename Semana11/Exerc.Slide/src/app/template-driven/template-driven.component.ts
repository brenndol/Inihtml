import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-comum',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class FormularioComumComponent {
  @ViewChild('formulario') Forms: NgForm | undefined;

  onSubmit(){
    if(this.Forms){
      let { nome, email, localizacao, dropdown  } = this.Forms.value;
      console.log(nome, email, localizacao, dropdown );
    }
    console.log(this.Forms);
  }
}
