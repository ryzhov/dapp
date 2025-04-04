import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { abi } from './PrimaTokenAbi.js';


const contractAddress = '0x148d3ee921B349c972d7E0DD5dab527C0502d640';
//const sepoliaUserAddress = '0xD7B60bfBbFEF9673FaAc4641d57B47e20528dfEA';


export function PrimaToken({ provider }) {
  const [symbol, setSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    async function updateState(contract) {
      setSymbol(await contract.symbol());
      setTotalSupply(await contract.totalSupply());
      setName(await contract.name());
    }
    const contract = new ethers.Contract(contractAddress, abi, provider);
    updateState(contract);
  }, [ provider ]);

  return (
    <div className="container">
      <h3>Prima Token</h3>
      <div className="balance">totalSupply: {totalSupply} symbol: {symbol} name: {name}</div>
    </div>
  );
}
