import { Routes } from '@angular/router';
import { HomePageComponent, ProjectDetailsPageComponent, ErrorPageComponent, CertificatesPageComponent, CvPageComponent } from './pages';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'projects/:id', component: ProjectDetailsPageComponent },
    { path: 'certificates', component: CertificatesPageComponent },
    { path: 'cv', component: CvPageComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: '**', component: ErrorPageComponent }
];
