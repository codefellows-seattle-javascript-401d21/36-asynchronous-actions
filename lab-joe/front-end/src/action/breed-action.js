import uuid from 'uuid/v4';
import { logError } from '../lib/utils';
import superagent from 'superagent';

export const breedsSet = breeds => ({
    type: 'BREEDS_SET',
    payload: breeds,
});

export const breedCreate = breed => ({
    type: 'BREED_CREATE',
    payload: breed,
});

export const breedUpdate = breed => ({
    type: 'BREED_UPDATE',
    payload: breed,
});

export const breedDelete = breed => ({
    type: 'BREED_DELETE',
    payload: breed,
});

// asynchronous action
export const breedFetchRequest = () => dispatch => {
    return superagent.get(`${__API_URL__}/api/v1/breed`)
        .then(res => dispatch(breedsSet(res.body)))
        .catch(logError);
};

export const breedCreateRequest = breed => (dispatch) => {
    return superagent.post(`${__API_URL__}/api/v1/breed`)
        .send(breed)
        .then(res => dispatch(breedCreate(res.body)))
        .catch(logError);
};

export const breedUpdateRequest = breed => (dispatch) => {
    console.log(breed);
    return superagent.put(`${__API_URL__}/api/v1/breed/${breed._id}`)
        .send(breed)
        .then(() => dispatch(breedUpdate(breed)))
        .catch(logError);
};

export const breedDeleteRequest = breed => (dispatch) => {
    return superagent.delete(`${__API_URL__}/api/v1/breed/${breed._id}`)
        .then(() => dispatch(breedDelete(breed)))
        .catch(logError);
};