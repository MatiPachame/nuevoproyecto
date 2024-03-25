import { Routes } from '@angular/router';
import { Botones2Component } from './componentes/botones2/botones2.component';
import { BotonesComponent } from './componentes/botones/botones.component';
import { ErrorComponent } from './componentes/error/error.component';

export const routes: Routes = [

    {path:'hola', component: Botones2Component},
    {path: 'chau', component: BotonesComponent},
    {path: '**', component: ErrorComponent}
];
