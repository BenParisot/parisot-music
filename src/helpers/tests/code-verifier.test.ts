import exp from 'constants';
import generateRandomString from '../code-verifier';

describe('testing random string function', () => {
    test('no args passed returns null', () => {
        expect(generateRandomString()).toBe(null);
    });

    test('desired length arg is too small', () => {
        expect(generateRandomString(2)).toBe(null);
    })

    test('desired string length is too large', () => {
        expect(generateRandomString(600)).toBe(null);
    })
});