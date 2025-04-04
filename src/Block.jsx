import React, { useState } from 'react';

function Block({ block }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div>
      <button onClick={toggle}>Block #{block.number}</button>
      { open &&
        <div>
          <p>Block hash: {block.hash}</p>
          <p>Parent hash: {block.parentHash} </p>
          <p>State root: {block.stateRoot} </p>
          <p>Receipts root: {block.receiptsRoot} </p>
          <p>Amount transactions: {block.transactions.length} </p>
        </div>
      }
    </div>
  );
}

export default Block;
