import { Routes } from '@angular/router';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ResultComponent } from './pages/result/result.component';
import { canActivateFormGuard } from './guards/form.guard';
import { LogoComponent } from './components/logo/logo-component.component';
// import { CounterDisplayComponent } from './counter-display/counter-display.component';
import CounterResolver from './services/counter.resolver';

export const routes: Routes = [
  { path: 'result', component: ResultComponent, canActivate: [canActivateFormGuard] },
  { path: 'contact', component: ContactFormComponent },
  { path: 'logo', component: LogoComponent },
  {
    path: 'counter',
    // component: CounterDisplayComponent,
    // loadComponent:() => import('./counter-display/counter-display.component').then((C) => C.CounterDisplayComponent),
    loadComponent: () => import('./components/counter-display/counter-display.component'),

    providers: [CounterResolver],
    resolve: { counter: CounterResolver },
  },
  {
    path: 'swiper',

    loadComponent: () => import('./pages/swiper/swiper.component'),
  },
  {
    path: 'form',

    loadComponent: () => import('./pages/form/form.component'),
  },
  {
    path: 'modal',

    loadComponent: () => import('./pages/dialog-display/dialog-display.component'),
  },
  {
    path: 'dashboard',

    loadComponent: () => import('./pages/user-dashboard/user-dashboard.component'),
  },
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
];
