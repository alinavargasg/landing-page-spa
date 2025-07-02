/* Definición de las rutas de la landing page. Primero se definen las 
   existentes y luego, en caso de escribir una ruta no existente, 
   se redirecciona directamente a home.*/
   
import { Routes } from '@angular/router';
export const routes: Routes = [
    { 
        path: '',
        loadComponent: () => import('../app/home/home').then(m => m.HomeComponent)
    },
    {
        path: 'servicios',
        loadComponent: () => import('../app/benefits/benefits').then(m => m.BenefitsComponent)
    },   
    {
        path: 'contact',
        loadComponent: () => import('../app/contact-form/contact-form').then(m => m.ContactFormComponent)
    },
    {
        path: '**',
        loadComponent: () => import('../app/home/home').then(m => m.HomeComponent)
    }

];
