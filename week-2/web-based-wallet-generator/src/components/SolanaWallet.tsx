import React, { useState } from "react";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import "./SolanaWallet.css";

interface Props {
  mnemonic: string;
}

export const SolanaWallet: React.FC<Props> = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState<string[]>([]);

  const handleAddWallet = () => {
    if (!mnemonic) return;

    const seed = mnemonicToSeedSync(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derived = derivePath(path, seed.toString("hex")).key;
    const secretKey = nacl.sign.keyPair.fromSeed(derived).secretKey;
    const keypair = Keypair.fromSecretKey(secretKey);
    setPublicKeys([...publicKeys, keypair.publicKey.toBase58()]);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="solana-wallet">
      <h2>Solana Wallets</h2>
      <button className="wallet-btn" onClick={handleAddWallet}>
        ➕ Add Solana Wallet
      </button>
      <div className="wallet-list">
        {publicKeys.map((key, i) => (
          <div className="wallet-item" key={i}>
            🔑 {key}
          </div>
        ))}
      </div>
    </div>
  );
};
