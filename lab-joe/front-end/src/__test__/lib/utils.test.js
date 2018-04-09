'use strict';

const utils = require('../../lib/utils');
import Dashboard from '../../components/dashboard';

describe('utils module', () => {
    describe('renderIf function', () => {
        test('should return component if test is passed', () => {
            const test = true;
            const component = Dashboard;
            expect(utils.renderIf(test, component)).toBe(component);
        });
        test('should return undefined if test is not passed', () => {
            const test = false;
            const component = Dashboard;
            expect(utils.renderIf(test, component)).toBe(undefined);
        });
    });
});