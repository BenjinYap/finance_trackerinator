import {Injectable} from '@angular/core';
import {ExpenseModel} from "../models/expense/expense.model";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: ExpenseModel[] = [];

  constructor() {

  }

  public getExpenses() {
    return this.expenses;
  }

  public fetchExpenses() {
    this.expenses = [
      new ExpenseModel(new Date(), 'Food', 'Snacks', 55),
      new ExpenseModel(new Date(), 'Bills', 'Water', 237.57),
      new ExpenseModel(new Date(), 'Pay', 'Shop', -3864.7),
    ];
    return this.expenses;
  }
}
