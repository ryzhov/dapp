import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const contractAddress = '0x5e16FB1784abd2a33ca84D259AcE9e1cAE55416c';
const sepoliaUserAddress = '0xD7B60bfBbFEF9673FaAc4641d57B47e20528dfEA';

const abi = [
  "function symbol() view returns (string)",
  "function getVendingMachineBalance() view returns (uint)",
  "function balanceOf(address addr) view returns (uint)",
  "function purchase(uint amount) payable returns ()"
];

export function VendingMachine({ provider }) {
  const [symbol, setSymbol] = useState('');
  const [cupsInMachine, setCupsInMachine] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function updateVendingMachineState(contract) {
      setSymbol(await contract.symbol());
      setCupsInMachine(await contract.getVendingMachineBalance());
      setBalance(await contract.balanceOf(sepoliaUserAddress));
    }
    const contract = new ethers.Contract(contractAddress, abi, provider);
    updateVendingMachineState(contract);
  }, [ provider ]);

  return (
    <div className="container">
      <h3>Vending Machine</h3>
      <div className="balance">cupsInMachine: {cupsInMachine} symbol: {symbol} balance: {balance}</div>
    </div>
  );
}
