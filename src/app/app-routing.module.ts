import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'homepage',
    loadChildren: () => import('./public/pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./public/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./public/pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'libro1',
    loadChildren: () => import('./public/pages/libro1/libro1.module').then( m => m.Libro1PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
