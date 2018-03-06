import reducer from '../reducer/expense';
require('jest');

describe('expense reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle EXPENSE_CREATE', () => {
    let expenseOne = { _id: '1234', spend: 'wat', timestamp: new Date() };
    let expenseTwo = { _id: '4567', spend: 'who', timestamp: new Date() };

    let state = reducer([expenseOne], {
      type: 'EXPENSE_CREATE',
      payload: categoryTwo,
    });

    expect(state).toContain(expenseOne);
    expect(state).toContain(expenseTwo);
  });
});
