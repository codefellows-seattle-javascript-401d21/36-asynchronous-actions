import reducer from '../reducers/category';
require('jest');

describe('category reducer', () => {
  it('should retunr the inital state on frist call', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle CATEGORY_CREATE', () => {
    let categoryOne = {_id: '1234', title: 'wat', timestamp: new Date() };

    let state = reducer([categoryOne], {
      type: 'CATEGPRY_CRATE',
      payload: categoryOne,
    });

    expect(state).toContain(categoryOne);
    
  });

  it('should handle CATEGORY_UPDATE', () => {
    let categoryTwo = {title: 'who'};

    let state = reducer([categoryTwo], {
      type: 'CATEGPRY_UPDATE',
      payload: categoryTwo,
    });

    expect(state).toContain(categoryTwo);
    
  });

  it('should handle CATEGORY_DELETE', () => {
    let categoryTwo = {title: 'who'};

    let state = reducer([categoryTwo], {
      type: 'CATEGPRY_DELETE',
      payload: categoryTwo,
    });

    expect(state).toContain(categoryTwo);
  });
});