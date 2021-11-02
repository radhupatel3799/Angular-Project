import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AddFirstComponent } from './add-first/add-first.component'
import { AddSecondComponent } from './add-second/add-second.component'
import { AddThirdComponent } from './add-third/add-third.component'
const routes: Routes = [
  {
    path: 'add-first',
    component: AddFirstComponent,
  },
  {
    path: 'add-second',
    component: AddSecondComponent,
  },
  {
    path: 'add-third',
    component: AddThirdComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestModuleRoutingModule {}
