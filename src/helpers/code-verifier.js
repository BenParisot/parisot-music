"use strict";
// The code verifier is a high-entropy cryptographic random string with a length between 43 and 128 characters. It can contain letters, digits, underscores, periods, hyphens, or tildes.
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = void 0;
var generateRandomString = function (desiredLength) {
    var errorMessage = 'desiredLength error. Please use a length between 43-128.';
    if (desiredLength < 43 || desiredLength > 128 || !desiredLength)
        return errorMessage;
    var randomString = '';
    var possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < desiredLength; i++) {
        randomString + possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return randomString;
};
exports.generateRandomString = generateRandomString;
