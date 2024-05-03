import {ExpenseModel} from './expense.model';

describe('Expense', () => {
  it('should create an instance', () => {
    expect(new ExpenseModel()).toBeTruthy();
  });
});
