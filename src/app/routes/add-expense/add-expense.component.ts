import {Component} from '@angular/core';
import {AddExpenseFormComponent} from "../../forms/add-expense-form/add-expense-form.component";
import {RouteContainerComponent} from "../../components/route-container/route-container.component";

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [
    AddExpenseFormComponent,
    RouteContainerComponent
  ],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {

}
