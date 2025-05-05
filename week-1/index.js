// let bytes = new Uint8Array([128, 256, 303, 500]);
// console.log(bytes);

// Ascii!

// bytes to ascii!
// // default array
// // function bytesToAscii(byteArray) {
// //   return byteArray.map((byte) => String.fromCharCode(byte)).join("");
// // }

// // const bytes = [72, 101, 65, 111];
// // const asciiEncoding = bytesToAscii(bytes);
// // console.log(asciiEncoding);

// // ascii to bytes!
// // function asciiToBytes(asciiString) {
// //   const byteArray = [];
// //   for (let i = 0; i < asciiString.length; i++) {
// //     byteArray.push(asciiString.charCodeAt(i));
// //   }
// //   return byteArray;
// // }

// // const ascii = "Hello";
// // const bytesArray = asciiToBytes(ascii);
// // console.log(bytesArray);

// // Using uint8Array!

// // function bytesToAscii(byteArray) {
// //   return new TextDecoder().decode(byteArray);
// // }

// // const bytes = new Uint8Array([72, 101, 108, 108, 111]);
// // const asciiString = bytesToAscii(bytes);
// // console.log(asciiString);

// // function asciiToBytes(ascii) {
// //   return new Uint8Array([...ascii].map((char) => char.charCodeAt(0)));
// // }

// // const ascii = "Hello";
// // const byteArray = asciiToBytes(ascii);
// // console.log(byteArray);

// // Hex!
// function arrayToHex(byteArray) {
//   let hexString = "";
//   for (let i = 0; i < byteArray.length; i++) {
//     hexString += byteArray[i].toString(16).padStart(2, "0");
//   }
//   return hexString;
// }

// // Example usage:
// const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
// const hexString = arrayToHex(byteArray);
// console.log(hexString); // Output: "48656c6c6f"

// // Hex to array!
// function hexToArray(hexString) {
//   const byteArray = new Uint8Array(hexString.length / 2);
//   for (let i = 0; i < byteArray.length; i++) {
//     byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
//   }
//   return byteArray;
// }

// // Example usage:
// const hex = "48656c6c6f";
// const byteArrayFromHex = hexToArray(hex);
// console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]

// // base 64

// console.log("-----------------base 64-----------\n");
// const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
// const base64Encoded = Buffer.from(uint8Array).toString("base64");
// console.log(base64Encoded);

// // base 58~

// const bs58 = require("bs58");

// function uint8ArrayToBase58(uint8Array) {
//   return bs58.encode(uint8Array);
// // }

// // Example usage:
// const bs58 = require("bs58");

// function uint8ArrayToBase58(uint8Array) {
//   return bs58.encode(uint8Array);
// }

// // Example usage:
// const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
// const base58String = uint8ArrayToBase58(byteArray);
// console.log(base58String); // Output: Base58 encoded string

// const bs58 = require("bs58");

// function base58ToUint8Array(base58String) {
//   return bs58.decode(base58String);
// }

// // Example usage:
// const base58 = base58String; // Use the previously encoded Base58 string
// const byteArrayFromBase58 = base58ToUint8Array(base58);
// console.log(byteArrayFromBase58); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
