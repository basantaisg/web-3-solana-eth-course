import React, { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";
import "./EthereumWallet.css";

interface Props {
  mnemonic: string;
}

export const EthWallet: React.FC<Props> = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState<string[]>([]);

  const handleAddEthWallet = async () => {
    if (!mnemonic) return;

    const seed = await mnemonicToSeed(mnemonic);
    const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    const wallet = new Wallet(child.privateKey);

    setAddresses([...addresses, wallet.address]);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="eth-wallet">
      <h2>Ethereum Wallets</h2>
      <button className="wallet-btn" onClick={handleAddEthWallet}>
        ➕ Add ETH Wallet
      </button>
      <div className="wallet-list">
        {addresses.map((address, i) => (
          <div className="wallet-item" key={i}>
            🦊 {address}
          </div>
        ))}
      </div>
    </div>
  );
};
