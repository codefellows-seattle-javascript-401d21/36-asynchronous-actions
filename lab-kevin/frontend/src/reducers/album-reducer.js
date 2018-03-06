export default (state=[], action) => {
  let {type, payload} = action;

  const takeAction = {};

  takeAction['ALBUM_CREATE'] = album => {
    return [...state , album];
  };

  takeAction['ALBUM_SET'] = id => {
    return id;
  };

  takeAction['ALBUM_UPDATE'] = modAlbum => {
    return [...state].map(album => album._id !== modAlbum._id ? album : modAlbum);
  };

  takeAction['ALBUM_DELETE'] = id => {
    return [...state].filter(album => album._id !== id);
  };

  return takeAction[type] ? takeAction[type](payload) : state;

};


