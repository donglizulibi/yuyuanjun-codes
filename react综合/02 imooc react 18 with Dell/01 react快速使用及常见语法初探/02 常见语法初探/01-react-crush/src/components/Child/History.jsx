function History({ history, onChange }) {
  console.log(history);
  const historyItems = history.map((item, index) => {
    return (
      <li
        className="history-item"
        key={index}
        onClick={() => {
          onChange(index);
        }}
      >
        this is step {index + 1}
      </li>
    );
  });
  return (
    <div>
      <h4 className="history-title">History</h4>
      <ul className="history-list">{historyItems}</ul>
    </div>
  );
}

export default History;
