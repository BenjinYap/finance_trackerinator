import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ExpenseModel} from "../../models/expense/expense.model";
import {TableComponent} from "../../bjui/table/table.component";

type Column = {
  header: string,
  field: string,
};

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    NgForOf,
    TableComponent,
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})

export class DataTableComponent {
  public columns: Column[] = [
    {header: 'Date', field: 'date'},
    {header: 'Category', field: 'category'},
    {header: 'Item', field: 'item'},
    {header: 'Amount', field: 'amount'},
  ];

  @Input() public data: ExpenseModel[] | null = null;
}

