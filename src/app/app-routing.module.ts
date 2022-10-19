import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./public/pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./public/pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'libro/:id',
    loadChildren: () => import('./public/pages/libro1/libro1.module').then( m => m.Libro1PageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./public/pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./public/pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
