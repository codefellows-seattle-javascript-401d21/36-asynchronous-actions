import { renderIf, classToggler, map, filter, reduce } from '../lib/utils';
require('jest');

describe('utils', () => {
  test('renderIf', () => {
    expect(typeof renderIf).toBe('function');
    expect(renderIf(true, 'component')).toBe('component');
    expect(renderIf(false, 'component')).toBe(undefined);
  });

  test('classToggler', () => {
    expect(typeof classToggler).toBe('function');
  });

  test('map', () => {
    expect(typeof map).toBe('function');
    expect(map([1, 'asdf'], isNaN)).toMatchObject([false, true]);

  });

  test('filter', () => {
    expect(typeof filter).toBe('function');
    expect(filter([1, 'asdf'], isNaN)).toMatchObject(['asdf']);
  });

  test('reduce', () => {
    expect(typeof reduce).toBe('function');
    expect(reduce([1, 2], (a, b) => a + b)).toBe(3);
  });

});