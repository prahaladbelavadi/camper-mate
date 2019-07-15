import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LocationPage } from '../location/location.page';
import { CampDetailsPage } from '../camp-details/camp-details.page';
import { MyDetailsPage } from '../my-details/my-details.page';
const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'location',
                outlet: 'location',
                component: LocationPage
            },
            {
                path: 'camp',
                outlet: 'camp',
                component: CampDetailsPage
            },
            {
                path: 'me',
                outlet: 'me',
                component: MyDetailsPage
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(location:location)'
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }