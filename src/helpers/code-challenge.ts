// code-challenge takes the code-verifier string and hashes it using the SHA256 algorithm.

export const codeChallenge = async (codeVerifier: string) => {
    

    // define function that uses base64encode() to convert the binary SHA256 data to a Base64 string
        // input is digest
        // output is string

    // hash codeVerifier using digest()
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    //convert digest into string to pass into base64encode?
    const bufferToBase64 = (digest: ArrayBuffer): string => {
        const digestUint8Array = new Uint8Array(digest);
        const digestBinaryString = digestUint8Array.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
        return btoa(digestBinaryString);
    }

    //return called function with returned digest data 
    return bufferToBase64(digest);

}
