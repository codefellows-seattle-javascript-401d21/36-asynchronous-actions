export default (state = [], action) => {
    let { type, payload } = action;

    switch (type) {
        // when refresh page, sets  breeds
        case 'BREEDS_SET':
            // payload is an array of  breed objects
            return payload;

        case 'BREED_CREATE':
            if (!payload.name || payload.name.trim().length === 0) {
                throw new Error('Language name cannot be empty.');
            }
            return [...state, payload];

        case 'BREED_UPDATE':
            if (!payload.name || payload.name.trim().length === 0) {
                throw new Error('Language name cannot be empty.');
            }
            return state.map(breed => breed._id === payload._id ? payload : breed);

        case 'BREED_DELETE':
            if (!payload._id || payload._id.trim().length === 0) {
                throw new Error('Language ID must be present.');
            }
            return state.filter(breed => breed._id !== payload._id);

        default:
            return state;
    }
};