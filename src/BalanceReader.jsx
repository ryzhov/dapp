import { ethers } from 'ethers';

export function BalanceReader({ balance, onAddressChanged }) {
  return (
    <div className="container">
      <h3>Balance Reader</h3>
      <label>
        <span>Address:</span>
        <input placeholder="Eth address" onChange={onAddressChanged}></input>
      </label>
      <div className="balance">Balance: {ethers.formatEther(balance)} ETH</div>
    </div>
  );
}
