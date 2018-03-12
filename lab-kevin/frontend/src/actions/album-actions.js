import superagent from 'superagent';

const album_create = album => ({ type: 'ALBUM_CREATE', payload: album});

const album_set = album => ({type: 'ALBUM_SET', payload: album});

const album_update = album => ({type: 'ALBUM_UPDATE', payload: album});

const album_delete = id => ({type: 'ALBUM_DELETE', payload: id});



const albumCreateRequest = album => dispatch => {
  return superagent.post(`${__API_URL__}/api/v1/album`)
    .send(album)
    .then(res => dispatch(album_create(res.body)))
    .catch(console.err); 
};


export {album_create, album_set, album_update, album_delete, albumCreateRequest};
