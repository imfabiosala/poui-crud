import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './vendor/list/list.component';
import { FormComponent } from './vendor/form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vendor/list', component: ListComponent },
  { path: 'vendor/new', component: FormComponent },
  { path: 'vendor/edit/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }