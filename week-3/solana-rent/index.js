const {
  Connection,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");
const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

(async () => {
  const dataSize = 16; // Replace with the desired account size in bytes
  const minBalance = await connection.getMinimumBalanceForRentExemption(
    dataSize
  );
  console.log(`Rent-exempt minimum: ${minBalance / LAMPORTS_PER_SOL} SOL`);
})();
