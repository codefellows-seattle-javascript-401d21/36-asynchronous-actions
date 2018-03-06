import * as actions from '../actions/expense-actions';
import expense from '../reducers/expense';
require('jest');

describe('category actions', () => {
  it('should create and action to add a category', () => {
    let expense = {title: 'hello world'};
    let action = actions.expenseCreate(expense);

    expect(action.type).toEqual('EXPENSE_CREATE');
    expect(action.payload).toHaveProperty('_id');
    expect(action.payload).toHaveProperty('timestamp');
  });

  it('should update and action to add a category', () => {
    let expense = {title: 'bye world'};
    let action = actions.expenseUpdate(expense);

    expect(action.type).toEqual('EXPENSE_UPDATE');
    expect(action.payload.title).toBe('bye world');
  });

  it('should delete and action to add a category', () => {
    let expense = {title: 'bye world'};
    let action = actions.expenseDelete(expense);

    expect(action.type).toEqual('EXPENSE_DELETE');
    expect(action.payload.title).toBe('bye world');
  });
});