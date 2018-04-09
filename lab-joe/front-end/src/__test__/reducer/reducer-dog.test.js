import reducer from '../../reducer/dog';


describe('Dog reducer', () => {

    describe('default action', () => {
        test('should return an initial app state', () => {
            expect(reducer(undefined, {})).toEqual({});
        });
    });

    describe('breed create action', () => {
        describe('valid input', () => {
            test('should create a new key(breedId) value(empty array) in app state', () => {
                const mockBreed = { name: 'new one', _id: '1' };
                expect(reducer({}, { type: 'BREED_CREATE', payload: mockBreed })).toEqual({ [mockBreed._id]: [] });
            });
        });

        describe('invalid input', () => {
            test('should throw an error if breed id is empty', () => {
                const mockBreed = { name: 'new one', _id: '' };
                expect(() => reducer({}, { type: 'BREED_CREATE', payload: mockBreed })).toThrow('DOG REDUCER: Breed ID must be present.');
            });
            test('should throw an error if breed name is empty or all space', () => {
                const mockBreedOne = { name: '', _id: '1' };
                expect(() => reducer({}, { type: 'BREED_CREATE', payload: mockBreedOne })).toThrow('DOG REDUCER: Breed name cannot be empty.');
                const mockBreedTwo = { name: '  ', _id: '1' };
                expect(() => reducer({}, { type: 'BREED_CREATE', payload: mockBreedTwo })).toThrow('DOG REDUCER: Breed name cannot be empty.');
            });
        });
    });

    describe('breed delete action', () => {
        describe('valid input', () => {
            test('should return an updated state with breed and all dogs that belong to that breed removed', () => {
                const mockBreed = { name: 'new one', _id: '1' };
                const mockDog = { '1': [{ _id: '1', breed: '1', name: 'test name', age: 'test age' }], '2': [] };
                const updatedMockDog = { '2': [] };
                expect(reducer(mockDog, { type: 'BREED_DELETE', payload: mockBreed })).toEqual(updatedMockDog);
            });
        });

        describe('invalid input', () => {
            test('should throw an error if breed id is empty', () => {
                const mockBreed = { name: 'new one', _id: '' };
                expect(() => reducer({}, { type: 'BREED_DELETE', payload: mockBreed })).toThrow('DOG REDUCER: Breed ID must be present.');
            });
        });
    });

    describe('dog create action', () => {
        describe('valid input', () => {
            test('should return an app state with a new dog', () => {
                const mockDog = { name: 'new dog', age: 'test age', breed: '1', _id: '1' };
                const mockBreed = { name: 'new one', _id: '1' };
                let state = reducer({}, { type: 'BREED_CREATE', payload: mockBreed });
                let expected = { '1': [mockDog] };
                state = reducer(state, { type: 'DOG_CREATE', payload: mockDog });
                expect(state.dogs).toEqual(expected);
            });
        });

        describe('invalid input', () => {
            test('should throw an error if breed id is empty', () => {
                const mockDog = { name: 'new dog', age: 'test', breed: '', _id: '1' };
                expect(() => reducer({}, { type: 'DOG_CREATE', payload: mockDog })).toThrow('DOG REDUCER: Dog breedID must be present.');
            });
            test('should throw an error if dog id is empty', () => {
                const mockDogOne = { name: 'new dog', age: 'tests', breed: '1', _id: '' };
                expect(() => reducer({}, { type: 'DOG_CREATE', payload: mockDogOne })).toThrow('DOG REDUCER: Dog ID must be present.');
                const mockDogTwo = { name: 'new dog', age: 'tests', breed: '1', _id: '   ' };
                expect(() => reducer({}, { type: 'DOG_CREATE', payload: mockDogTwo })).toThrow('DOG REDUCER: Dog ID must be present.');
            });
        });
    });

    describe('dog update action', () => {
        describe('dog update action', () => {
            test('should return an app state with an updated dog', () => {
                const mockDog = { name: 'new dog', age: 'test', breed: '1', _id: '1' };
                const mockBreed = { name: 'new one', _id: '1' };
                let state = reducer({}, { type: 'BREED_CREATE', payload: mockBreed });
                state = reducer(state, { type: 'DOG_CREATE', payload: mockDog });
                const updatedMockDog = { name: 'updated dog', age: 'test', breed: '1', _id: '1' };
                state = reducer(state, { type: 'DOG_UPDATE', payload: updatedMockDog });
                expect(state[mockDog._id]).toEqual([updatedMockDog]);
            });
        });

        describe('invalid input', () => {
            test('should throw an error if breed id is empty', () => {
                const mockDog = { name: 'new dog', age: 'test', breed: '', _id: '1' };
                expect(() => reducer({}, { type: 'DOG_UPDATE', payload: mockDog })).toThrow('DOG REDUCER: Dog breedID must be present.');
            });
            test('should throw an error if dog id is empty', () => {
                const mockDogOne = { name: 'new dog', age: 'tests', breed: '1', _id: '' };
                expect(() => reducer({}, { type: 'DOG_UPDATE', payload: mockDogOne })).toThrow('DOG REDUCER: Dog ID must be present.');
                const mockDogTwo = { name: 'new dog', age: 'tesst', breed: '1', _id: '   ' };
                expect(() => reducer({}, { type: 'DOG_UPDATE', payload: mockDogTwo })).toThrow('DOG REDUCER: Dog ID must be present.');
            });
            test('should throw an error if name is empty', () => {
                const mockDog = { name: '', age: 'testss', breed: '1', _id: '1' };
                expect(() => reducer({}, { type: 'DOG_UPDATE', payload: mockDog })).toThrow('DOG REDUCER: Dog name cannot be empty.');
            });
            test('should throw an error if age is empty', () => {
                const mockDog = { name: 'test', age: '', breed: '1', _id: '1' };
                expect(() => reducer({}, { type: 'DOG_UPDATE', payload: mockDog })).toThrow('DOG REDUCER: Dog age cannot be empty.');
            });
        });
    });

    describe('dog delete action', () => {
        describe('valid input', () => {
            test('should return an app state with a dog removed', () => {
                const mockDog = { name: 'new dog', age: '100', breed: '1', _id: '1' };
                const mockBreed = { name: 'new one', _id: '1' };
                let state = reducer({}, { type: 'BREED_CREATE', payload: mockBreed });
                let expected = { '1': [] };
                expect(reducer(state, { type: 'DOG_DELETE', payload: mockDog })).toEqual(expected);
            });
        });

        describe('invalid input', () => {
            test('should throw an error if breed id is empty', () => {
                const mockDog = { name: 'new dog', age: 'tetsts', breed: '', _id: '1' };
                expect(() => reducer({}, { type: 'DOG_DELETE', payload: mockDog })).toThrow('DOG REDUCER: Dog breedID must be present.');
            });
            test('should throw an error if dog id is empty', () => {
                const mockDogOne = { name: 'new dog', age: 'test', breed: '1', _id: '' };
                expect(() => reducer({}, { type: 'DOG_DELETE', payload: mockDogOne })).toThrow('DOG REDUCER: Dog ID must be present.');
                const mockDogTwo = { name: 'new dog', age: '100', breed: '1', _id: '   ' };
                expect(() => reducer({}, { type: 'DOG_DELETE', payload: mockDogTwo })).toThrow('DOG REDUCER: Dog ID must be present.');
            });
            test('should throw an error if name is empty', () => {
                const mockDog = { name: '', age: '100', breed: '1', _id: '1' };
                expect(() => reducer({}, { type: 'DOG_DELETE', payload: mockDog })).toThrow('DOG REDUCER: Dog name cannot be empty.');
            });
            test('should throw an error if age is empty', () => {
                const mockDog = { name: 'test', age: '', breed: '1', _id: '1' };
                expect(() => reducer({}, { type: 'DOG_DELETE', payload: mockDog })).toThrow('DOG REDUCER: Dog age cannot be empty.');
            });
        });
    });
});