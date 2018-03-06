import * as actions from '../actions/cat-actions';
import cat from '../reducers/cat';
require('jest');

describe('cat actions', () => {
  it('should create and action to add a category', () => {
    let cat = {name: 'hello world'};
    let action = actions.catCreate(cat);

    expect(action.type).toEqual('CAT_CREATE');
    expect(action.payload).toHaveProperty('timestamp');
  });

  it('should update and action to add a category', () => {
    let cat = {name: 'bye world'};
    let action = actions.catUpdate(cat);

    expect(action.type).toEqual('CAT_UPDATE');
    expect(action.payload.name).toBe('bye world');
  });

  it('should delete and action to add a category', () => {
    let cat = {name: 'bye world'};
    let action = actions.catDelete(cat);

    expect(action.type).toEqual('CAT_DELETE');
    expect(action.payload.name).toBe('bye world');
  });
});