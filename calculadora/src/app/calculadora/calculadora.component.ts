import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  numero1=0;
  numero2=0;
  total=0;

  miResta(){
    this.total=this.numero1-this.numero2;
  }
  miSuma(){
    this.total=this.numero1+this.numero2;
  }
  mimultiplicacion(){
    this.total=this.numero1*this.numero2;
  }
  miDivision(){
    this.total=this.numero1/this.numero2;
  }
  miCuadrado(){
    this.total=Math.pow(this.numero1, this.numero2); 
}
}