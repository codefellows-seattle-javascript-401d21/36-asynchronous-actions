import reducer from '../../reducer/language';


describe('Language reducer', () => {

  describe('default action', () => {
    test('should return an initial app state', () => {
      expect(reducer(undefined, {})).toEqual([]);
    });
  });

  describe('create action', () => {
    describe('Valid input', () => {
      test('should create a new language in app state', () => {
        const mockLanguage = {name: 'new one', id: '1'};
        expect(reducer([], {type: 'LANGUAGE_CREATE', payload: mockLanguage})).toEqual([mockLanguage]);
      });
    });

    describe('Invalid input', () => {
      test('should throw an error if language name is empty or all space', () => {
        const mockLanguageOne = {name: '', id: '1'};
        expect(() => reducer([], {type: 'LANGUAGE_CREATE', payload: mockLanguageOne})).toThrow('Language name cannot be empty.');
        const mockLanguageTwo = {name: '    ', id: '1'};
        expect(() => reducer([], {type: 'LANGUAGE_CREATE', payload: mockLanguageTwo})).toThrow('Language name cannot be empty.');
      });
    });
  });

  describe('update action', () => {
    describe('Valid input', () => {
      test('should return an updated app state', () => {
        const mockLanguage = {name: 'new one', id: '1'};
        let languages = reducer([], {type: 'LANGUAGE_CREATE', payload: mockLanguage});
        const updatedMockLanguage = {name: 'updated one', id: '1'};
        expect(reducer(languages, {type: 'LANGUAGE_UPDATE', payload: updatedMockLanguage})).toEqual([updatedMockLanguage]);
      });
    });

    describe('Invalid input', () => {
      test('should throw an error if language name is empty or all space', () => {
        const mockLanguageOne = {name: '', id: '1'};
        expect(() => reducer([], {type: 'LANGUAGE_UPDATE', payload: mockLanguageOne})).toThrow('Language name cannot be empty.');
        const mockLanguageTwo = {name: '    ', id: '1'};
        expect(() => reducer([], {type: 'LANGUAGE_UPDATE', payload: mockLanguageTwo})).toThrow('Language name cannot be empty.');
      });
    });
  });

  describe('remove action', () => {
    describe('Vaid input', () => {
      test('should return an app state with removed an item', () => {
        const mockLanguage = {name: 'new one', id: '1'};
        let languages = reducer([], {type: 'LANGUAGE_CREATE', payload: mockLanguage});
        expect(reducer(languages, {type: 'LANGUAGE_DELETE', payload: mockLanguage})).toEqual([]);
      });
    });

    describe('Invalid input', () => {
      test('should throw an error if language id is not present', () => {
        const mockLanguageOne = {name: '', id: ''};
        expect(() => reducer([], {type: 'LANGUAGE_DELETE', payload: mockLanguageOne})).toThrow('Language ID must be present.');
      });
    });
  });
});
