import uuid from 'uuid/v4';
import { logError } from '../lib/utils';
import superagent from 'superagent';

export const dogsSet = dogs => {
    console.log('action dogs set: ', dogs);
    return {
        type: 'DOGS_SET',
        payload: dogs
    };
};

export const dogCreate = dog => ({
    type: 'DOG_CREATE',
    payload: dog,
});

export const dogUpdate = dog => ({
    type: 'DOG_UPDATE',
    payload: dog,
});

export const dogDelete = dog => ({
    type: 'DOG_DELETE',
    payload: dog,
});

export const dogFetchRequest = () => dispatch => {
    return superagent.get(`${__API_URL__}/api/v1/dog`)
        .then(res => dispatch(dogsSet(res.body)))
        .catch(logError);
};

export const dogCreateRequest = dog => (dispatch) => {
    return superagent.post(`${__API_URL__}/api/v1/dog`)
        .send(dog)
        .then(res => { console.log(res.body); dispatch(dogCreate(res.body)); })
        .catch(logError);
};

export const dogUpdateRequest = dog => (dispatch) => {
    console.log('DOG UPDATE', dog);
    return superagent.put(`${__API_URL__}/api/v1/dog/${dog._id}`)
        .send(dog)
        .then(() => dispatch(dogUpdate(dog)))
        .catch(logError);
};

export const dogDeleteRequest = dog => (dispatch) => {
    return superagent.delete(`${__API_URL__}/api/v1/dog/${dog._id}`)
        .then(() => dispatch(dogDelete(dog)))
        .catch(logError);
};