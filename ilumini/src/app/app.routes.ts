import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Pages/home/home.component';
import { FormListComponent } from './Forms/Pages/form-list/form-list.component';
import { FormDetailComponent } from './Forms/Pages/form-detail/form-detail.component';
import { CreateFormComponent } from './Forms/Pages/create-form/create-form.component';

export const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "form"},
  { path: "home", component: HomeComponent },
  { path: "form", component: FormListComponent },
  { path: "form-detail", component: FormDetailComponent },
  { path: "create-form", component: CreateFormComponent}

];
