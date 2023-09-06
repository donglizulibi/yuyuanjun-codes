function getHistoryItems(history, onChange) {
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
  return historyItems;
}

function History({ history, onChange }) {
  return (
    <div>
      <h4 className="history-title">History</h4>
      <ul className="history-list">{getHistoryItems(history, onChange)}</ul>
    </div>
  );
}

export default History;
