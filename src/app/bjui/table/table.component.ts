import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

type Column = {
  header: string,
  field: string,
};

@Component({
  selector: 'bj-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() public columns: Column[] = [];
  @Input() public data: any[] = [];
  protected readonly JSON = JSON;
}
