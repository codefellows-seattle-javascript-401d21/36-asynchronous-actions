import {renderIf, log} from '../lib/utils';

describe('UTILS', ()=> {
  it('RENDER IF', () => {
    expect(renderIf(true, 2345)).toEqual(2345);
  });
  // it('LOG', () => {
  //     expect(log(123)).toEqual(0)
  // })
  // it('update should update an item from state', () => {
  //     let action = {type:'ALBUM_UPDATE', payload: {_id:123, name:"wahoo"}}
  //     expect(albumReducer(state, action)[0].name).toEqual("wahoo")
  // })
});