import { generateMnemonic, validateMnemonic } from "bip39";

const words = generateMnemonic(256);
console.log(words);
