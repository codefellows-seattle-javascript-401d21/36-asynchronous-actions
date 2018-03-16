import * as actions from '../../action/expense-action';

describe('expense-action module', () => {

  test('should create an action to create a category', () => {
    const payload = {name: 'test name', budget: 10};
    const expectedAction = {
      type: 'CATEGORY_CREATE',
      payload,
    };
    expect(actions.categoryCreate(payload)).toEqual(expectedAction);
  });

  test('should create an action to delete a category', () => {
    const payload = {name: 'test name', budget: 10, id: 2};
    const expectedAction = {
      type: 'CATEGORY_DELETE',
      payload,
    };
    expect(actions.categoryDelete(payload)).toEqual(expectedAction);
  });

  test('should create an action to create an expense', () => {
    const payload = {name: 'test name', price: 10, categoryId: 1, id: 1};
    const expectedAction = {
      type: 'EXPENSE_CREATE',
      payload,
    };
    expect(actions.expenseCreate(payload)).toEqual(expectedAction);
  });

  test('should create an action to update an expense', () => {
    const payload = {name: 'test name', price: 10, categoryId: 1, id: 1};
    const expectedAction = {
      type: 'EXPENSE_UPDATE',
      payload,
    };
    expect(actions.expenseUpdate(payload)).toEqual(expectedAction);
  });

  test('should create an action to delete an expense', () => {
    const payload = {name: 'test name', budget: 10, categoryId: 2, id: 2};
    const expectedAction = {
      type: 'EXPENSE_DELETE',
      payload,
    };
    expect(actions.expenseDelete(payload)).toEqual(expectedAction);
  });

});
