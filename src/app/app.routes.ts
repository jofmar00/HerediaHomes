import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Pisos } from './components/pisos/pisos';
import { About } from './components/about/about';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'contact', component: Contact},
    {path: 'pisos', component:  Pisos},
    {path: 'about', component: About},
    {path: '**', redirectTo: 'home'},
];
