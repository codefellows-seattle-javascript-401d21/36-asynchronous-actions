import * as actions from '../actions/category-actions';
require('jest');

describe('category actions', () => {
  it('should create and action to add a category', () => {
    let category = {title: 'hello world'};
    let action = actions.categoryCreate(category);

    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload).toHaveProperty('_id');
    expect(action.payload).toHaveProperty('timestamp');
  });

  it('should update and action to add a category', () => {
    let category = {title: 'bye world'};
    let action = actions.categoryUpdate(category);

    expect(action.type).toEqual('CATEGORY_UPDATE');
    expect(action.payload.title).toBe('bye world');
  });

  it('should delete and action to add a category', () => {
    let category = {title: 'bye world'};
    let action = actions.categoryDelete(category);

    expect(action.type).toEqual('CATEGORY_DELETE');
    expect(action.payload.title).toBe('bye world');
  });
});