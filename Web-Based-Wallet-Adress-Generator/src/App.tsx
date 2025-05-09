import React, { useState } from "react";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "./components/SolanaWallet";
import { EthWallet } from "./components/EthereumWallet";

const App: React.FC = () => {
  const [mnemonic, setMnemonic] = useState<string>("");

  const handleGenerateMnemonic = () => {
    const mn = generateMnemonic();
    setMnemonic(mn);
  };

  return (
    <div className="app-container">
      <h1 className="main-head">🧠 Wallet Generator</h1>

      <div className="mnemonic-box">
        <h2 className="mnemonic-title">Seed Phrase</h2>
        <div className="mnemonic-content">
          {mnemonic || "No seed phrase generated yet."}
        </div>
        <button className="generate-btn" onClick={handleGenerateMnemonic}>
          🔁 Create Seed Phrase
        </button>
      </div>

      <div className="wallet-section">
        <div className="wallet-box">
          <SolanaWallet mnemonic={mnemonic} />
        </div>

        <div className="wallet-box">
          <EthWallet mnemonic={mnemonic} />
        </div>
      </div>
    </div>
  );
};

export default App;
