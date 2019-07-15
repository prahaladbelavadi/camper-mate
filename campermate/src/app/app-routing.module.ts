import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'camp-details', loadChildren: './camp-details/camp-details.module#CampDetailsPageModule' },
  { path: 'my-details', loadChildren: './my-details/my-details.module#MyDetailsPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
