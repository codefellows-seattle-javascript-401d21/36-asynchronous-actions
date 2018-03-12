export default (state={}, action) => {
  let {type, payload} = action;

  const takeAction = {};

  takeAction['ALBUM_CREATE'] = album => {
   
    return {...state , [album._id]: []};
  };

  takeAction['ALBUM_DELETE'] = album_id => {
    let alteredState = {...state};
    delete alteredState[album_id];
    return alteredState;
  };

  takeAction['IMAGE_CREATE'] = image => {
    let alteredState = {...state};
    alteredState[image.album] = [...alteredState[image.album], image];
    return alteredState;
  };

  takeAction['IMAGE_SET'] = id => {
    return id;
  };

  takeAction['IMAGE_UPDATE'] = modImage => {
    let alteredState = {...state};
    alteredState[modImage.album] = alteredState[modImage.album].map(image => image._id !== modImage._id ? image : modImage);
    return alteredState;
  };

  takeAction['IMAGE_DELETE'] = delImage => {
    let alteredState = {...state};
    alteredState[delImage.album] = alteredState[delImage.album].filter(image => image._id !== delImage._id);
    return alteredState;
  };

  return takeAction[type] ? takeAction[type](payload) : state;

};