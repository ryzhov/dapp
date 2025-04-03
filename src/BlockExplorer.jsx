import { useState, useEffect } from 'react';
import Block from './Block';

function BlockExplorer({ provider }) {
  const [blockNumber, setBlockNumber] = useState(0);

  useEffect(() => {
    async function getBlockNumber() {
      const latestBlockNum = await provider.getBlockNumber();
      console.log('latest block =>', latestBlockNum);
      setBlockNumber(latestBlockNum);
    }
    getBlockNumber();
  });

  return (
    <div className="container">
      <h3>Block Explorer</h3>
      <Block blocknum = {blockNumber} provider = {provider} />
      <Block blocknum = {blockNumber - 1} provider = {provider} />
      <Block blocknum = {blockNumber - 2} provider = {provider} />
    </div>
  );
}
export default BlockExplorer;