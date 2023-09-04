function Square({ onClick, index, value }) {
  return (
    <div className="square" onClick={() => onClick(index)}>
      {value}
    </div>
  );
}

export default Square;
