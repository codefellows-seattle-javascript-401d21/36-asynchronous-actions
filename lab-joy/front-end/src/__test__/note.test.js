import reducer from '../reducers/note';
require('jest');

describe('Note Reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  let note = { title: 'Joy', _id: '1234' };

  let state = reducer(null, {
    type: 'NOTE_GET',
    payload: note,
  });

  it('should handle NOTE_GET', () => {
    expect(state).toMatchObject(note);
  });

  it('should handle NOTE_CREATE', () => {
    let note2 = { title: 'Snowdrop', _id: '5678' };

    let newState = reducer(state, {
      type: 'NOTE_CREATE',
      payload: note2,
    });

    expect(newState).toMatchObject(newState);
  });

  it('should handle NOTE_UPDATE', () => {
    state = [{ title: 'Joy', _id: '1234' }, { title: 'Snowdrop', _id: '5678' }];
    note = { title: 'JoyUPDATEDDDD', _id: '1234' };

    state = reducer(state, {
      type: 'NOTE_UPDATE',
      payload: note,
    });

    expect(state).toMatchObject([{ title: 'JoyUPDATEDDDD', _id: '1234' }, { title: 'Snowdrop', _id: '5678' }]);
  });

  it('should handle NOTE_DELETE', () => {
    state = [{ title: 'Joy', _id: '1234' }, { title: 'Snowdrop', _id: '5678' }];
    note = { title: 'Joy', _id: '1234' };

    state = reducer(state, {
      type: 'NOTE_DELETE',
      payload: note,
    });

    expect(state).toMatchObject([{ title: 'Snowdrop', _id: '5678' }]);
  });
});