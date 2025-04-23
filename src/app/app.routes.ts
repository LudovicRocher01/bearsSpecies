import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { DetailsBearComponent } from './details-bear/details-bear.component';

export const routes: Routes = [
    { path: '', component: FaceSnapListComponent },
    { path: 'details/:id', component: DetailsBearComponent}
];
