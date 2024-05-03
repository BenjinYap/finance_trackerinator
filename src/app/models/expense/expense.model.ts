export class ExpenseModel {
  constructor(
    public date: Date,
    public category: string,
    public item: string,
    public amount: number,
  ) {
  }
}
