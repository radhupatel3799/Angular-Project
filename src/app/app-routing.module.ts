import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserAddComponent } from './user-add/user-add.component'
import { UserListComponent } from './user-list/user-list.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { AuthGuard } from './guard/auth.guard'
import { GoogleMapComponent } from './google-map/google-map.component'
import { VideoPlayerComponent } from './video-player/video-player.component'
import { UserDataComponent } from './user-data/user-data.component'
import { SliderComponent } from './slider/slider.component'

const TestModuleModule = () =>
  import('./test-module/test-module.module').then((x) => x.TestModuleModule)
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-add',
    component: UserAddComponent,
  },
  {
    path: 'edit/:id',
    component: UserAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-data',
    component: UserDataComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'google-map',
    component: GoogleMapComponent,
  },
  {
    path: 'video-player',
    component: VideoPlayerComponent,
  },
  {
    path: 'test',
    loadChildren: TestModuleModule,
    canActivate: [AuthGuard],
  },
  {
    path: 'slider',
    component: SliderComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  },
  {
    path: ' ',
    redirectTo: 'login',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
