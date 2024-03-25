import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonesComponent } from "./componentes/botones/botones.component";
import { Botones2Component } from "./componentes/botones2/botones2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BotonesComponent, Botones2Component]
})
export class AppComponent {
  title = 'nuevoproyecto';
}
