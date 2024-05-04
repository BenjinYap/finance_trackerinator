import {Routes} from '@angular/router';
import {HomeComponent} from "./routes/home/home.component";
import {AboutComponent} from "./routes/about/about.component";
import {AddExpenseComponent} from "./routes/add-expense/add-expense.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'add-expense', component: AddExpenseComponent},
];
