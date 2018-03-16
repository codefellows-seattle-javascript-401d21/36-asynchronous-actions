import * as actions from '../../action/category-action';

describe('category-action module', () => {

  test('should create an action to create a category', () => {
    const payload = {name: 'test name', budget: 10};
    const expectedAction = {
      type: 'CATEGORY_CREATE',
      payload,
    };
    expect(actions.categoryCreate(payload)).toEqual(expectedAction);
  });

  test('should create an action to update a category', () => {
    const payload = {name: 'test name', budget: 10, id: 1};
    const expectedAction = {
      type: 'CATEGORY_UPDATE',
      payload,
    };
    expect(actions.categoryUpdate(payload)).toEqual(expectedAction);
  });

  test('should create an action to delete a category', () => {
    const payload = {name: 'test name', budget: 10, id: 2};
    const expectedAction = {
      type: 'CATEGORY_DELETE',
      payload,
    };
    expect(actions.categoryDelete(payload)).toEqual(expectedAction);
  });

});
