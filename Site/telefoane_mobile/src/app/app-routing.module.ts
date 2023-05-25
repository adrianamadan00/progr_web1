import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelefoaneMobileComponent } from './telefoane-mobile/telefoane-mobile.component';

const routes: Routes = [
  { path: 'telefoane', component: TelefoaneMobileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }