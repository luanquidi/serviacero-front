import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PagesModule } from './pages/pages.module';
import { ToastrModule } from 'ngx-toastr';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { LoginModule } from './login/login/login.module';
import { TokenInterceptor } from './token.interceptor';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PagesModule,
    LoginModule,
    NzBackTopModule,
    ToastrModule.forRoot()
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
