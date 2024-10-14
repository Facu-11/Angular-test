import { Routes } from '@angular/router';
import { ComparatorComponentComponent } from './phoneComparator-page/comparator-component/comparator-component.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:"home",component:AppComponent},
    {path:"comparador",component:ComparatorComponentComponent}
];
