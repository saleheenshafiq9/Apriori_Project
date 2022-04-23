import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FrequentComponent } from './frequent/frequent.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'frequent', component: FrequentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
