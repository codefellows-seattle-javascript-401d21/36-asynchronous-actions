import reducer from '../../reducer/expense';


describe('Expense reducer', () => {

  describe('default action', () => {
    test('should return an initial app state', () => {
      expect(reducer(undefined, {})).toEqual({});
    });
  });

  describe('category create action', () => {
    describe('valid input', () => {
      test('should create a new key(categoryId) value(empty array) in app state', () => {
        const mockCategory = {name: 'new one', budget: 100, id: '1'};
        expect(reducer({}, {type: 'CATEGORY_CREATE', payload: mockCategory})).toEqual({[mockCategory.id]:[]});
      });
    });

    describe('invalid input', () => {
      test('should throw an error if category id is empty', () => {
        const mockCategory = {name: 'new one', budget: 100, id: ''};
        expect(() => reducer({}, {type: 'CATEGORY_CREATE', payload: mockCategory})).toThrow('EXPENSE REDUCER: Category ID must be present.');
      });
      test('should throw an error if category name is empty or all space', () => {
        const mockCategoryOne = {name: '', budget: 100, id: '1'};
        expect(() => reducer({}, {type: 'CATEGORY_CREATE', payload: mockCategoryOne})).toThrow('EXPENSE REDUCER: Category name cannot be empty or/and budget cannot be negative.');
        const mockCategoryTwo = {name: '  ', budget: 100, id: '1'};
        expect(() => reducer({}, {type: 'CATEGORY_CREATE', payload: mockCategoryTwo})).toThrow('EXPENSE REDUCER: Category name cannot be empty or/and budget cannot be negative.');
      });
    });
  });

  describe('category delete action', () => {
    describe('valid input', () => {
      test('should return an updated state with category and all expenses that belong to that category removed', () => {
        const mockCategory = {name: 'new one', budget: 100, id: '1'};
        const mockExpense = {'1': [{id: '1', categoryId: '1', name: 'tets exp', price: 100}], '2': []};
        const updatedMockExpense = {'2': []};
        expect(reducer(mockExpense, {type: 'CATEGORY_DELETE', payload: mockCategory})).toEqual(updatedMockExpense);
      });
    });

    describe('invalid input', () => {
      test('should throw an error if category id is empty', () => {
        const mockCategory = {name: 'new one', budget: 100, id: ''};
        expect(() => reducer({}, {type: 'CATEGORY_DELETE', payload: mockCategory})).toThrow('EXPENSE REDUCER: Category ID must be present.');
      });
    });
  });

  describe('expense create action', () => {
    describe('valid input', () => {
      test('should return an app state with a new expense', () => {
        const mockExpense = {name: 'new expense', price: 100, categoryId: '1', id: '1'};
        const mockCategory = {name: 'new one', budget: 100, id: '1'};
        let state = reducer({}, {type: 'CATEGORY_CREATE', payload: mockCategory});
        let expected = {'1': [mockExpense]};
        expect(reducer(state, {type: 'EXPENSE_CREATE', payload: mockExpense})).toEqual(expected);
      });
    });

    describe('invalid input', () => {
      test('should throw an error if category id is empty', () => {
        const mockExpense = {name: 'new expense', price: 100, categoryId: '', id: '1'};
        expect(() => reducer({}, {type: 'EXPENSE_CREATE', payload: mockExpense})).toThrow('EXPENSE REDUCER: Expense categoryID must be present.');
      });
      test('should throw an error if expense id is empty', () => {
        const mockExpenseOne = {name: 'new expense', price: 100, categoryId: '1', id: ''};
        expect(() => reducer({}, {type: 'EXPENSE_CREATE', payload: mockExpenseOne})).toThrow('EXPENSE REDUCER: Expense ID must be present.');
        const mockExpenseTwo = {name: 'new expense', price: 100, categoryId: '1', id: '   '};
        expect(() => reducer({}, {type: 'EXPENSE_CREATE', payload: mockExpenseTwo})).toThrow('EXPENSE REDUCER: Expense ID must be present.');
      });
      test('should throw an error if price is negative', () => {
        const mockExpense = {name: 'test', price: -100, categoryId: '1', id: '1'};
        expect(() => reducer({}, {type: 'EXPENSE_CREATE', payload: mockExpense})).toThrow('EXPENSE REDUCER: Expense name cannot be empty or/and price cannot be negative.');
      });
    });
  });

  describe('expense update action', () => {
    describe('expense update action', () => {
      test('should return an app state with an updated expense', () => {
        const mockExpense = {name: 'new expense', price: 100, categoryId: '1', id: '1'};
        const mockCategory = {name: 'new one', budget: 100, id: '1'};
        let state = reducer({}, {type: 'CATEGORY_CREATE', payload: mockCategory});
        state = reducer(state, {type: 'EXPENSE_CREATE', payload: mockExpense});
        const updatedMockExpense = {name: 'updated expense', price: 200, categoryId: '1', id: '1'};
        const expected = {'1': [updatedMockExpense]};
        expect(reducer(state, {type: 'EXPENSE_UPDATE', payload: updatedMockExpense})).toEqual(expected);
      });
    });

    describe('invalid input', () => {
      test('should throw an error if category id is empty', () => {
        const mockExpense = {name: 'new expense', price: 100, categoryId: '', id: '1'};
        expect(() => reducer({}, {type: 'EXPENSE_UPDATE', payload: mockExpense})).toThrow('EXPENSE REDUCER: Expense categoryID must be present.');
      });
      test('should throw an error if expense id is empty', () => {
        const mockExpenseOne = {name: 'new expense', price: 100, categoryId: '1', id: ''};
        expect(() => reducer({}, {type: 'EXPENSE_UPDATE', payload: mockExpenseOne})).toThrow('EXPENSE REDUCER: Expense ID must be present.');
        const mockExpenseTwo = {name: 'new expense', price: 100, categoryId: '1', id: '   '};
        expect(() => reducer({}, {type: 'EXPENSE_UPDATE', payload: mockExpenseTwo})).toThrow('EXPENSE REDUCER: Expense ID must be present.');
      });
      test('should throw an error if name is empty', () => {
        const mockExpense = {name: '', price: 100, categoryId: '1', id: '1'};
        expect(() => reducer({}, {type: 'EXPENSE_UPDATE', payload: mockExpense})).toThrow('EXPENSE REDUCER: Expense name cannot be empty or/and price cannot be negative.');
      });
      test('should throw an error if price is negative', () => {
        const mockExpense = {name: 'test', price: -100, categoryId: '1', id: '1'};
        expect(() => reducer({}, {type: 'EXPENSE_UPDATE', payload: mockExpense})).toThrow('EXPENSE REDUCER: Expense name cannot be empty or/and price cannot be negative.');
      });
    });
  });

  describe('expense delete action', () => {
    describe('valid input', () => {
      test('should return an app state with a expense removed', () => {
        const mockExpense = {name: 'new expense', price: 100, categoryId: '1', id: '1'};
        const mockCategory = {name: 'new one', budget: 100, id: '1'};
        let state = reducer({}, {type: 'CATEGORY_CREATE', payload: mockCategory});
        let expected = {'1': []};
        expect(reducer(state, {type: 'EXPENSE_DELETE', payload: mockExpense})).toEqual(expected);
      });
    });

    describe('invalid input', () => {
      test('should throw an error if category id is empty', () => {
        const mockExpense = {name: 'new expense', price: 100, categoryId: '', id: '1'};
        expect(() => reducer({}, {type: 'EXPENSE_DELETE', payload: mockExpense})).toThrow('EXPENSE REDUCER: Expense categoryID must be present.');
      });
      test('should throw an error if expense id is empty', () => {
        const mockExpenseOne = {name: 'new expense', price: 100, categoryId: '1', id: ''};
        expect(() => reducer({}, {type: 'EXPENSE_DELETE', payload: mockExpenseOne})).toThrow('EXPENSE REDUCER: Expense ID must be present.');
        const mockExpenseTwo = {name: 'new expense', price: 100, categoryId: '1', id: '   '};
        expect(() => reducer({}, {type: 'EXPENSE_DELETE', payload: mockExpenseTwo})).toThrow('EXPENSE REDUCER: Expense ID must be present.');
      });
      test('should throw an error if name is empty', () => {
        const mockExpense = {name: '', price: 100, categoryId: '1', id: '1'};
        expect(() => reducer({}, {type: 'EXPENSE_DELETE', payload: mockExpense})).toThrow('EXPENSE REDUCER: Expense name cannot be empty or/and price cannot be negative.');
      });
      test('should throw an error if price is negative', () => {
        const mockExpense = {name: 'test', price: -100, categoryId: '1', id: '1'};
        expect(() => reducer({}, {type: 'EXPENSE_DELETE', payload: mockExpense})).toThrow('EXPENSE REDUCER: Expense name cannot be empty or/and price cannot be negative.');
      });
    });
  });
});
