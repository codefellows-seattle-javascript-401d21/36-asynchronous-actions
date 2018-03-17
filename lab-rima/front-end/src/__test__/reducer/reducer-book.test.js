import reducer from '../../reducer/book';


describe('Book reducer', () => {

  describe('default action', () => {
    test('should return an initial app state', () => {
      expect(reducer(undefined, {})).toEqual({});
    });
  });

  describe('language create action', () => {
    describe('valid input', () => {
      test('should create a new key(languageId) value(empty array) in app state', () => {
        const mockLanguage = {name: 'new one', _id: '1'};
        expect(reducer({}, {type: 'LANGUAGE_CREATE', payload: mockLanguage})).toEqual({[mockLanguage._id]:[]});
      });
    });

    describe('invalid input', () => {
      test('should throw an error if language id is empty', () => {
        const mockLanguage = {name: 'new one', _id: ''};
        expect(() => reducer({}, {type: 'LANGUAGE_CREATE', payload: mockLanguage})).toThrow('BOOK REDUCER: Language ID must be present.');
      });
      test('should throw an error if language name is empty or all space', () => {
        const mockLanguageOne = {name: '', _id: '1'};
        expect(() => reducer({}, {type: 'LANGUAGE_CREATE', payload: mockLanguageOne})).toThrow('BOOK REDUCER: Language name cannot be empty.');
        const mockLanguageTwo = {name: '  ', _id: '1'};
        expect(() => reducer({}, {type: 'LANGUAGE_CREATE', payload: mockLanguageTwo})).toThrow('BOOK REDUCER: Language name cannot be empty.');
      });
    });
  });

  describe('language delete action', () => {
    describe('valid input', () => {
      test('should return an updated state with language and all books that belong to that language removed', () => {
        const mockLanguage = {name: 'new one', _id: '1'};
        const mockBook = {'1': [{_id: '1', language: '1', title: 'test title', author: 'test author'}], '2': []};
        const updatedMockBook = {'2': []};
        expect(reducer(mockBook, {type: 'LANGUAGE_DELETE', payload: mockLanguage})).toEqual(updatedMockBook);
      });
    });

    describe('invalid input', () => {
      test('should throw an error if language id is empty', () => {
        const mockLanguage = {name: 'new one', _id: ''};
        expect(() => reducer({}, {type: 'LANGUAGE_DELETE', payload: mockLanguage})).toThrow('BOOK REDUCER: Language ID must be present.');
      });
    });
  });

  describe('book create action', () => {
    describe('valid input', () => {
      test('should return an app state with a new book', () => {
        const mockBook = {title: 'new book', author: 'test author', language: '1', _id: '1'};
        const mockLanguage = {name: 'new one', _id: '1'};
        let state = reducer({}, {type: 'LANGUAGE_CREATE', payload: mockLanguage});
        let expected = {'1': [mockBook]};
        state = reducer(state, {type: 'BOOK_CREATE', payload: mockBook});
        expect(state.books).toEqual(expected);
      });
    });

    describe('invalid input', () => {
      test('should throw an error if language id is empty', () => {
        const mockBook = {name: 'new book', author: 'test', language: '', _id: '1'};
        expect(() => reducer({}, {type: 'BOOK_CREATE', payload: mockBook})).toThrow('BOOK REDUCER: Book languageID must be present.');
      });
      test('should throw an error if book id is empty', () => {
        const mockBookOne = {name: 'new book', author: 'tests', language: '1', _id: ''};
        expect(() => reducer({}, {type: 'BOOK_CREATE', payload: mockBookOne})).toThrow('BOOK REDUCER: Book ID must be present.');
        const mockBookTwo = {name: 'new book', author: 'tests', language: '1', _id: '   '};
        expect(() => reducer({}, {type: 'BOOK_CREATE', payload: mockBookTwo})).toThrow('BOOK REDUCER: Book ID must be present.');
      });
    });
  });

  describe('book update action', () => {
    describe('book update action', () => {
      test('should return an app state with an updated book', () => {
        const mockBook = {title: 'new book', author: 'test', language: '1', _id: '1'};
        const mockLanguage = {name: 'new one', _id: '1'};
        let state = reducer({}, {type: 'LANGUAGE_CREATE', payload: mockLanguage});
        state = reducer(state, {type: 'BOOK_CREATE', payload: mockBook});
        const updatedMockBook = {title: 'updated book', author: 'test', language: '1', _id: '1'};
        state = reducer(state, {type: 'BOOK_UPDATE', payload: updatedMockBook});
        expect(state[mockBook._id]).toEqual([updatedMockBook]);
      });
    });

    describe('invalid input', () => {
      test('should throw an error if language id is empty', () => {
        const mockBook = {title: 'new book', author: 'test', language: '', _id: '1'};
        expect(() => reducer({}, {type: 'BOOK_UPDATE', payload: mockBook})).toThrow('BOOK REDUCER: Book languageID must be present.');
      });
      test('should throw an error if book id is empty', () => {
        const mockBookOne = {title: 'new book', author: 'tests', language: '1', _id: ''};
        expect(() => reducer({}, {type: 'BOOK_UPDATE', payload: mockBookOne})).toThrow('BOOK REDUCER: Book ID must be present.');
        const mockBookTwo = {name: 'new book', author: 'tesst', language: '1', _id: '   '};
        expect(() => reducer({}, {type: 'BOOK_UPDATE', payload: mockBookTwo})).toThrow('BOOK REDUCER: Book ID must be present.');
      });
      test('should throw an error if title is empty', () => {
        const mockBook = {title: '', author: 'testss', language: '1', _id: '1'};
        expect(() => reducer({}, {type: 'BOOK_UPDATE', payload: mockBook})).toThrow('BOOK REDUCER: Book title cannot be empty.');
      });
      test('should throw an error if author is empty', () => {
        const mockBook = {title: 'test', author: '', language: '1', _id: '1'};
        expect(() => reducer({}, {type: 'BOOK_UPDATE', payload: mockBook})).toThrow('BOOK REDUCER: Book author cannot be empty.');
      });
    });
  });

  describe('book delete action', () => {
    describe('valid input', () => {
      test('should return an app state with a book removed', () => {
        const mockBook = {title: 'new book', author: '100', language: '1', _id: '1'};
        const mockLanguage = {name: 'new one', _id: '1'};
        let state = reducer({}, {type: 'LANGUAGE_CREATE', payload: mockLanguage});
        let expected = {'1': []};
        expect(reducer(state, {type: 'BOOK_DELETE', payload: mockBook})).toEqual(expected);
      });
    });

    describe('invalid input', () => {
      test('should throw an error if language id is empty', () => {
        const mockBook = {title: 'new book', author: 'tetsts', language: '', _id: '1'};
        expect(() => reducer({}, {type: 'BOOK_DELETE', payload: mockBook})).toThrow('BOOK REDUCER: Book languageID must be present.');
      });
      test('should throw an error if book id is empty', () => {
        const mockBookOne = {title: 'new book', author: 'test', language: '1', _id: ''};
        expect(() => reducer({}, {type: 'BOOK_DELETE', payload: mockBookOne})).toThrow('BOOK REDUCER: Book ID must be present.');
        const mockBookTwo = {title: 'new book', author: '100', language: '1', _id: '   '};
        expect(() => reducer({}, {type: 'BOOK_DELETE', payload: mockBookTwo})).toThrow('BOOK REDUCER: Book ID must be present.');
      });
      test('should throw an error if title is empty', () => {
        const mockBook = {title: '', author: '100', language: '1', _id: '1'};
        expect(() => reducer({}, {type: 'BOOK_DELETE', payload: mockBook})).toThrow('BOOK REDUCER: Book title cannot be empty.');
      });
      test('should throw an error if author is empty', () => {
        const mockBook = {title: 'test', author: '', language: '1', _id: '1'};
        expect(() => reducer({}, {type: 'BOOK_DELETE', payload: mockBook})).toThrow('BOOK REDUCER: Book author cannot be empty.');
      });
    });
  });
});
