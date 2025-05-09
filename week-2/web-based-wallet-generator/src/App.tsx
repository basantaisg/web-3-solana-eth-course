import { useState } from "react";
import { generateMnemonic } from "bip39";

const App = () => {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="main">
      <div className="mnemonic_holder">{mnemonic}</div>

      <button
        className="genMnemonic"
        onClick={async function () {
          const mn = await generateMnemonic();
          setMnemonic(mn);
        }}
      >
        Create Seed Phrase
      </button>
    </div>
  );
};

export default App;
