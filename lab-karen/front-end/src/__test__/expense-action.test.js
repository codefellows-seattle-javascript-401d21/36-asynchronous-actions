import * as actions from '../actions/expense-actions';
require('jest');

describe('expense actions', () => {
  it('should create an action to add a expense', () => {
    let expense = {spend: 'dinner'};
    let action = actions.expenseCreate(expense);

    expect(action.type).toEqual('EXPENSE_CREATE');
    expect(action.payload).toHaveProperty('_id');
    expect(action.payload).toHaveProperty('timestamp');
  });
});
