
export function NetworkInfo({ network: { chainId, name }}) {
  return (
    <div className="container row">
      <div className="row">
        <em>chainId:</em> {chainId}
      </div>
      <div className="row">
        <em>name:</em> {name}
      </div>
    </div>
  );
}
