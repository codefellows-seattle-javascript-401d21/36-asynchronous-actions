import reducer from '../../reducer/category';


describe('Category reducer', () => {

  describe('default action', () => {
    test('should return an initial app state', () => {
      expect(reducer(undefined, {})).toEqual([]);
    });
  });

  describe('create action', () => {
    describe('Valid input', () => {
      test('should create a new category in app state', () => {
        const mockCategory = {name: 'new one', budget: 100, id: '1'};
        expect(reducer([], {type: 'CATEGORY_CREATE', payload: mockCategory})).toEqual([mockCategory]);
      });
    });

    describe('Invalid input', () => {
      test('should throw an error if category name is empty or all space', () => {
        const mockCategoryOne = {name: '', budget: 100, id: '1'};
        expect(() => reducer([], {type: 'CATEGORY_CREATE', payload: mockCategoryOne})).toThrow('Name cannot be empty or/and budget cannot be negative.');
        const mockCategoryTwo = {name: '    ', budget: 100, id: '1'};
        expect(() => reducer([], {type: 'CATEGORY_CREATE', payload: mockCategoryTwo})).toThrow('Name cannot be empty or/and budget cannot be negative.');
      });

      test('should throw an error if budget is less than 0', () => {
        const mockCategory = {name: 'test', budget: -10, id: '1'};
        expect(() => reducer([], {type: 'CATEGORY_CREATE', payload: mockCategory})).toThrow('Name cannot be empty or/and budget cannot be negative.');
      });
    });
  });

  describe('update action', () => {
    describe('Valid input', () => {
      test('should return an updated app state', () => {
        const mockCategory = {name: 'new one', budget: 100, id: '1'};
        let categories = reducer([], {type: 'CATEGORY_CREATE', payload: mockCategory});
        const updatedMockCategory = {name: 'updated one', budget: 150, id: '1'};
        expect(reducer(categories, {type: 'CATEGORY_UPDATE', payload: updatedMockCategory})).toEqual([updatedMockCategory]);
      });
    });

    describe('Invalid input', () => {
      test('should throw an error if category name is empty or all space', () => {
        const mockCategoryOne = {name: '', budget: 100, id: '1'};
        expect(() => reducer([], {type: 'CATEGORY_UPDATE', payload: mockCategoryOne})).toThrow('Name cannot be empty or/and budget cannot be negative.');
        const mockCategoryTwo = {name: '    ', budget: 100, id: '1'};
        expect(() => reducer([], {type: 'CATEGORY_UPDATE', payload: mockCategoryTwo})).toThrow('Name cannot be empty or/and budget cannot be negative.');
      });

      test('should throw an error if budget is less than 0', () => {
        const mockCategory = {name: 'test', budget: -10, id: '1'};
        expect(() => reducer([], {type: 'CATEGORY_UPDATE', payload: mockCategory})).toThrow('Name cannot be empty or/and budget cannot be negative.');
      });
    });
  });

  describe('remove action', () => {
    describe('Vaid input', () => {
      test('should return an app state with removed an item', () => {
        const mockCategory = {name: 'new one', budget: 100, id: '1'};
        let categories = reducer([], {type: 'CATEGORY_CREATE', payload: mockCategory});
        expect(reducer(categories, {type: 'CATEGORY_DELETE', payload: mockCategory})).toEqual([]);
      });
    });

    describe('Invalid input', () => {
      test('should throw an error if category id is not present', () => {
        const mockCategoryOne = {name: '', budget: 100, id: ''};
        expect(() => reducer([], {type: 'CATEGORY_DELETE', payload: mockCategoryOne})).toThrow('Category ID must be present.');
      });
    });
  });
});
