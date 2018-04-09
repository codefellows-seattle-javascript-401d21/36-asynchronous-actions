export default (state = {}, action) => {
    // state is a collections of dogs associated to breed id
    let { type, payload } = action;

    switch (type) {
        case 'BREED_CREATE': {
            // payload is breed
            if (!payload._id || payload._id.trim().length === 0) {
                throw new Error('DOG REDUCER: Breed ID must be present.');
            }
            if (!payload.name || payload.name.trim().length === 0) {
                throw new Error('DOG REDUCER: Breed name cannot be empty.');
            }
            // when a new lang is created, create a new array to store associated dogs in dogs state
            return { ...state, [payload._id]: [] };
        }

        case 'BREED_DELETE': {
            // payload is breed
            if (!payload._id || payload._id.trim().length === 0) {
                throw new Error('DOG REDUCER: Breed ID must be present.');
            }
            let curState = { ...state };
            delete curState[payload._id];
            return curState;
        }

        case 'DOGS_SET': {
            let curState = {};
            for (let i = 0; i < payload.length; i++) {
                if (!(payload[i].breed in curState)) {
                    curState[payload[i].breed] = [];
                }
                curState[payload[i].breed].push(payload[i]);
            }
            console.log(curState);
            return curState;
        }

        case 'DOG_CREATE': {
            // payload is a dog
            if (!payload._id || payload._id.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog ID must be present.');
            }
            if (!payload.breed || payload.breed.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog breedID must be present.');
            }
            if (!payload.name || payload.name.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog name cannot be empty.');
            }
            if (!payload.age || payload.age.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog age cannot be empty.');
            }
            let curState = state;
            curState[payload.breed].push(payload);
            return Object.assign({}, state, {
                dogs: curState,
            });
            //let curState = state;
            //curState[payload.breed].push(payload);
            //return curState;
        }

        case 'DOG_UPDATE': {
            if (!payload._id || payload._id.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog ID must be present.');
            }
            if (!payload.breed || payload.breed.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog breedID must be present.');
            }
            if (!payload.name || payload.name.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog name cannot be empty.');
            }
            if (!payload.age || payload.age.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog age cannot be empty.');
            }
            let curState = { ...state };
            curState[payload.breed] = state[payload.breed].map(dog => dog._id === payload._id ? payload : dog);
            return curState;
        }

        case 'DOG_DELETE': {
            if (!payload._id || payload._id.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog ID must be present.');
            }
            if (!payload.breed || payload.breed.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog breedID must be present.');
            }
            if (!payload.name || payload.name.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog name cannot be empty.');
            }
            if (!payload.age || payload.age.trim().length === 0) {
                throw new Error('DOG REDUCER: Dog age cannot be empty.');
            }
            let curState = { ...state };
            curState[payload.breed] = state[payload.breed].filter(dog => dog._id !== payload._id);
            return curState;
        }

        default:
            return state;
    }
};