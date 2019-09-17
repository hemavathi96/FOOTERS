import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstFooterComponent } from './component/first-footer/first-footer.component';
import { CreativefooterComponent } from './component/creativefooter/creativefooter.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'firstpage',
  //   pathMatch: 'full'
  // },
  {
    path: 'firstpage',
    component: FirstFooterComponent
  },
  {
    path: 'creativepage',
    component: CreativefooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
