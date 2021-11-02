import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TestModuleRoutingModule } from './test-module-routing.module'
import { AddFirstComponent } from './add-first/add-first.component'
import { AddSecondComponent } from './add-second/add-second.component'
import { AddThirdComponent } from './add-third/add-third.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

@NgModule({
  declarations: [AddFirstComponent, AddSecondComponent, AddThirdComponent],
  imports: [
    CommonModule,
    TestModuleRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
    }),
  ],
})
export class TestModuleModule {}
