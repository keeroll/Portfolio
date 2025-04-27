import { Routes } from '@angular/router';
import { HomePageComponent, ProjectDetailsPageComponent, ErrorPageComponent } from './pages';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'projects/:id', component: ProjectDetailsPageComponent },
    { path: '**', component: ErrorPageComponent }
];
