import superagent from 'superagent';

const image_create = image => ({ type: 'IMAGE_CREATE', payload: image});

const image_set = image => ({type: 'IMAGESET', payload: image});

const image_update = image => ({type: 'IMAGE_UPDATE', payload: image});

const image_delete = image => ({type: 'IMAGE_DELETE', payload: image});



const imageCreateRequest = image => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/image`)
    .send(image)
    .then(res => dispatch(image_create(res.body)))
    .catch(console.err); 
};


export {image_create, image_set, image_update, image_delete, imageCreateRequest};
