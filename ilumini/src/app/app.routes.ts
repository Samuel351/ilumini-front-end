import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Pages/home/home.component';
import { FormListComponent } from './Forms/Pages/form-list/form-list.component';
import { FormDetailComponent } from './Forms/Pages/form-detail/form-detail.component';

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "form", component: FormListComponent },
  { path: "form-detail", component: FormDetailComponent }

];
