import {Component} from '@angular/core';
import {DataTableComponent} from "../../components/data-table/data-table.component";
import {ExpenseService} from "../../services/expense.service";
import {ExpenseModel} from "../../models/expense/expense.model";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DataTableComponent
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
