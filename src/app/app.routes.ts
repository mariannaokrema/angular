import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { canActivateAuth } from './auth/access.guard';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ResultComponent } from './pages/result/result.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: SearchPageComponent },
      { path: 'profile', component: ProfilePageComponent },
    ],
    canActivate: [canActivateAuth],
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'result', component: ResultComponent },
  { path: 'contact', component: ContactFormComponent },
];
