// The code verifier is a high-entropy cryptographic random string with a length between 43 and 128 characters. It can contain letters, digits, underscores, periods, hyphens, or tildes.

const generateRandomString = (desiredLength: number): string | null => {
    if ((desiredLength < 43) || (desiredLength > 128) || !desiredLength) {return null;}
    let randomString: string = '';
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i: number = 0; i < desiredLength; i++) {
        randomString + possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return randomString;
}

export default generateRandomString;