import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { P006Component } from './pages/p006/p006.component';
import { P008Component } from './pages/p008/p008.component';
import { P005Component } from './pages/p005/p005.component';
import { AppComponent } from '../../../../Semana6/FEB-006/UESC-app/src/app/app.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'p005', component: AppComponent},
    { path: 'p006', component: P006Component},
    { path: 'p008', component: P008Component},
];
