import {generateRandomString} from '../code-verifier';

describe('testing random string function', () => {
    test('no arguments passed', () => {
        expect(generateRandomString()).toBe('desiredLength error. Please use a length between 43-128.');
    })

    test('desired length arg is too small', () => {
        expect(generateRandomString(2)).toBe('desiredLength error. Please use a length between 43-128.');
    })

    test('desired string length is too large', () => {
        expect(generateRandomString(600)).toBe('desiredLength error. Please use a length between 43-128.');
    })
});