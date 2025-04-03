import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import BalanceReader from './BalanceReader.jsx';
import BlockExplorer from './BlockExplorer.jsx';
import { NetworkInfo } from './NetworkInfo.jsx';


const providerUrl = 'https://ethereum-sepolia-rpc.publicnode.com';
const provider = new ethers.JsonRpcProvider(providerUrl);
const { chainId, name } = await provider.getNetwork();


function App() {
  const [balance, setBalance] = useState(0n);

  const onAddressChanged = async event => {
    console.log('onAddressChanged::event =>', event);
    const { value: address } = event.target ;

    try {
      setBalance(await provider.getBalance(address));
    } catch(err) {
      console.log('provider error =>', err);
      setBalance(0n);
    }
  }

  return (
    <>
      <NetworkInfo chainId={chainId} name={name} />
      <BalanceReader balance={balance} onAddressChanged={onAddressChanged} />
    </>
  );
}

export default App
