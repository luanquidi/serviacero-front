import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { IconsProviderModule } from '../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PAGES_ROUTES } from './pages.routes';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { ContactComponent } from './contact/contact.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ServicesModule } from '../services/services.module';
import { ProjectsComponent } from './projects/projects.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectComponent } from './project/project.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { NzSelectModule } from 'ng-zorro-antd/select';




@NgModule({
  declarations: [WelcomeComponent, AdminComponent, HomeComponent, PagesComponent, ContactComponent, ProjectsComponent, ProjectComponent, ProjectViewComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
    RouterModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzListModule,
    NzInputModule,
    NzCardModule,
    NzDatePickerModule,
    NgxPaginationModule,
    NzModalModule,
    NzSelectModule,
    PAGES_ROUTES,
    ServicesModule
  ],
   exports: [WelcomeComponent, AdminComponent, HomeComponent]
})
export class PagesModule { }
