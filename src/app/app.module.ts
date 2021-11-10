import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'
import { UserAddComponent } from './user-add/user-add.component'
import { UserListComponent } from './user-list/user-list.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { LogoutComponent } from './logout/logout.component'
import { NgxPaginationModule } from 'ngx-pagination'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderInterceptor } from './intercepter/header.interceptor'
import { NgxDropzoneModule } from 'ngx-dropzone'
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown'
import { DataTablesModule } from 'angular-datatables'
import { GoogleMapComponent } from './google-map/google-map.component'
import { AgmCoreModule } from '@agm/core'
import { VideoPlayerComponent } from './video-player/video-player.component'
import { VgCoreModule } from '@videogular/ngx-videogular/core'
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { UserDataComponent } from './user-data/user-data.component'
import { MatTableModule } from '@angular/material/table'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TestModuleComponent } from './test-module/test-module.component'
import { SliderComponent } from './slider/slider.component'
import { SlickCarouselModule } from 'ngx-slick-carousel'
import {
  AuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialLoginModule,
} from 'angularx-social-login'

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      '301514769861-3semh9017faoosb6015b9js87sbsgkto.apps.googleusercontent.com',
    ),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('654810455510289'),
  },
])

export function provideConfig() {
  return config
}
@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserListComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    GoogleMapComponent,
    VideoPlayerComponent,
    UserDataComponent,
    TestModuleComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxDropzoneModule,
    AngularMultiSelectModule,
    DataTablesModule,
    VgCoreModule,
    Ng2SearchPipeModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhUv9P41WchUVFV8WrENfq9h3AzGC7nac',
      libraries: ['places'],
    }),
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, '/assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
    SlickCarouselModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
