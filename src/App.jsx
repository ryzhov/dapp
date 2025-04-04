import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';
import { BalanceReader } from './BalanceReader.jsx';
import { BlockExplorer } from './BlockExplorer.jsx';
import { NetworkInfo } from './NetworkInfo.jsx';
import { VendingMachine } from './VendingMachine.jsx';
import { PrimaToken } from './PrimaToken.jsx';


const providerUrl = 'https://ethereum-sepolia-rpc.publicnode.com'; //'https://b.web3gate.ru/671438fe-b472-4234-83ca-e271172a6f07';
const provider = new ethers.JsonRpcProvider(providerUrl);

function App() {
  const nBlocks = 3;

  const [network, setNetwork] = useState({ chainId: '', name: '' });
  const [balance, setBalance] = useState(0n);
  const [blocks, setBlocks] = useState([]);

  console.log('App::run =>');

  useEffect(() => {
    console.log('useEffect::get network =>');
    provider.getNetwork().then(setNetwork, err => console.log('getNetwork::err =>', err));

    console.log('useEffect::get blocks =>');
    provider.getBlockNumber().then(latestBlockNum => {
      console.log('latest block =>', latestBlockNum);
      Promise.all([...Array(nBlocks)].map((_, i) => provider.getBlock(latestBlockNum - i))).then(setBlocks);
    });
  }, []);

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
      <NetworkInfo network={network} />
      <BalanceReader balance={balance} onAddressChanged={onAddressChanged} />
      <BlockExplorer blocks={blocks} />
      <VendingMachine provider={provider} />
      <PrimaToken provider={provider} />
    </>
  );
}

export default App
