import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TestModuleRoutingModule } from './test-module-routing.module'
import { AddFirstComponent } from './add-first/add-first.component'
import { AddSecondComponent } from './add-second/add-second.component'
import { AddThirdComponent } from './add-third/add-third.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { NgxAudioPlayerModule } from 'ngx-audio-player'
import { MatTreeModule } from '@angular/material/tree'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'

@NgModule({
  declarations: [AddFirstComponent, AddSecondComponent, AddThirdComponent],
  imports: [
    CommonModule,
    TestModuleRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, '/assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
    NgxAudioPlayerModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
})
export class TestModuleModule {}
