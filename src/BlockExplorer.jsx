import Block from './Block';

export function BlockExplorer({ blocks }) {
  console.log('blocks =>', blocks);

  return (
    <div className="container">
      <h3>Block Explorer</h3>
      {blocks.map(block => (<Block key={block.number} block={block} />))}
    </div>
  );
}
