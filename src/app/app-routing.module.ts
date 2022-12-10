import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './vendor/list/list.component';
import { FormComponent } from './vendor/form/form.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'vendor/list', component: ListComponent },
  { path: 'vendor/new', component: FormComponent },
  { path: 'vendor/:type/:id/', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }