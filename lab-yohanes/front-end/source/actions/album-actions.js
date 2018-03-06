import superagent from 'superagent';

//Action Creations
export const albumSet = albums => ({
  type: 'ALBUM_SET',
  payload: albums,
});

export const albumCreate = album => ({
  type: 'ALBUM_CREATE',
  payload: album,
});
export const albumUpdate = album => ({
  type: 'ALBUM_UPDATE',
  payload: album,
});


export const albumDelete = album => ({
  type: 'ALBUM_DELETE',
  payload: album,
});

//Async Functions
export const albumFetchRequest = () => dispatch => { //we are going to map through our components
  return superagent.get(`${__API_URL__}/api/v1/album`)
    .then(res => dispatch(albumSet(res.body))); //returning array of albums from the backend
};

export const albumCraeteRequest = album => (dipsatch, getState) => { //we are going to map through our components
  return superagent.post(`${__API_URL__}/api/v1/album`)
    .set(album) //have our mongoDB shell running in terminal to render our database to our application
    .then(res => dispatch(albumCreate(res.body)));
};