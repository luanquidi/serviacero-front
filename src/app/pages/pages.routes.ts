import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PagesComponent } from './pages.component';
import { ContactComponent } from './contact/contact.component';
import { LoginGuard } from '../guards/login.guard';
import { ProjectsComponent } from './projects/projects.component';

// Guards


const pagesRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      canActivate: [LoginGuard],
      children: [
            {
              path: 'admin',
              component: AdminComponent,
            //   data: { titulo: 'Dashboard', tituloPadre: 'Principal' },
            },
            {
              path: 'contact',
              component: ContactComponent,
            //   data: { titulo: 'Dashboard', tituloPadre: 'Principal' },
            },
            {
              path: 'admin-projects',
              component: ProjectsComponent,
            //   data: { titulo: 'Dashboard', tituloPadre: 'Principal' },
            },
            // {
            //   path: 'importation',
            //   component: ImportationComponent,
            //   data: { titulo: 'Importación Emergia', tituloPadre: 'Importación' },
            // },
            // {
            //   path: 'upload',
            //   component: UploadComponent,
            //   data: { titulo: 'Cargue Emergia', tituloPadre: 'Cargue' },
            // },
            // {
            //   path: 'filter',
            //   component: FilterComponent,
            //   data: { titulo: 'Filtro Cargue', tituloPadre: 'Filtro' },
            // },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
      ]
    },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);