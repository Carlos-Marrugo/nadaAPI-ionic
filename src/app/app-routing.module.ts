import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'apod',
    loadChildren: () => import('./pages/apod/apod.module').then( m => m.ApodPageModule)
  },
  {
    path: 'mars-rover-photos',
    loadChildren: () => import('./pages/mars-rover-photos/mars-rover-photos.module').then( m => m.MarsRoverPhotosPageModule)
  },
  {
    path: 'apod-list',
    loadChildren: () => import('./pages/apod-list/apod-list.module').then( m => m.ApodListPageModule)
  },
  {
    path: 'apod-details',
    loadChildren: () => import('./pages/apod-details/apod-details.module').then( m => m.ApodDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
