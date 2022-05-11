import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AppComponent } from 'src/app/app.component';
import { MainNavComponent } from 'src/app/main-nav/main-nav.component';
import { MyDataRoutingModule } from './mydata-routing.module';
import { MyprofileComponent } from './myprofile/myprofile.component';

// export function HttpLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoeader(httpClient);
// }

@NgModule({
  imports: [
    MyDataRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    CommonModule,
  ],
  declarations: [
    // MyprofileComponent,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyDataModule {}
