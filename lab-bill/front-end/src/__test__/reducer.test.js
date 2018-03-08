import albumReducer from '../reducers/album';

describe('REDUCERS', ()=> {
  let state =[{_id:123, name:'hello'}];
  it('create should update state', () => {
    let action = {type:'ALBUM_CREATE', payload: {_id:234, name:'world'}};
    expect(albumReducer(state, action)[1]._id).toEqual(234);
  });
  it('delete should delete an item from state', () => {
    let action = {type:'ALBUM_DELETE', payload: {_id:123, name:'world'}};
    expect(albumReducer(state, action).length).toEqual(0);
  });
  it('update should update an item from state', () => {
    let action = {type:'ALBUM_UPDATE', payload: {_id:123, name:'wahoo'}};
    expect(albumReducer(state, action)[0].name).toEqual('wahoo');
  });
});