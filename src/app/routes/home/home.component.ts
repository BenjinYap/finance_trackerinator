import {Component} from '@angular/core';
import {DataTableComponent} from "../../components/data-table/data-table.component";
import {ExpenseService} from "../../services/expense.service";
import {ExpenseModel} from "../../models/expense/expense.model";
import {ButtonComponent} from "../../bjui/button/button.component";
import {RouterLink} from "@angular/router";
import {AddExpenseFormComponent} from "../../forms/add-expense-form/add-expense-form.component";
import {RouteContainerComponent} from "../../components/route-container/route-container.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DataTableComponent,
    ButtonComponent,
    RouterLink,
    AddExpenseFormComponent,
    RouteContainerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public expenses: ExpenseModel[] | null = null;

  constructor(
    private expenseService: ExpenseService,
  ) {
    this.expenses = this.expenseService.fetchExpenses();
  }
}
