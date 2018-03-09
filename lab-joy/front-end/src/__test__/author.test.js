import reducer from '../reducers/author';
require('jest');

describe('Author Reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  let author = { name: 'Joy', _id: '1234' };

  let state = reducer(null, {
    type: 'AUTHOR_SET',
    payload: author,
  });

  it('should handle AUTHOR_SET', () => {
    expect(state).toMatchObject(author);
  });

  it('should handle AUTHOR_CREATE', () => {
    let author2 = { name: 'Snowdrop', _id: '5678' };

    let newState = reducer(state, {
      type: 'AUTHOR_CREATE',
      payload: author2,
    });

    expect(newState).toMatchObject(newState);
  });

  it('should handle AUTHOR_UPDATE', () => {
    state = [{ name: 'Joy', _id: '1234' }, { name: 'Snowdrop', _id: '5678' }];
    author = {name: 'JoyUPDATEDDDD', _id: '1234'};

    state = reducer(state, {
      type: 'AUTHOR_UPDATE',
      payload: author,
    });

    expect(state).toMatchObject([{ name: 'JoyUPDATEDDDD', _id: '1234' }, { name: 'Snowdrop', _id: '5678' }]);
  });

  it('should handle AUTHOR_DELETE', () => {
    state = [{ name: 'Joy', _id: '1234' }, { name: 'Snowdrop', _id: '5678' }];
    author = { name: 'Joy', _id: '1234' };

    state = reducer(state, {
      type: 'AUTHOR_DELETE',
      payload: author,
    });

    expect(state).toMatchObject([{ name: 'Snowdrop', _id: '5678' }]);
  });
});