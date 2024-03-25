import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  //variables
  tipo: string="text";


  //eventos
cambiarTipo():void {
  if(this.tipo="text"){

  }
}




}
