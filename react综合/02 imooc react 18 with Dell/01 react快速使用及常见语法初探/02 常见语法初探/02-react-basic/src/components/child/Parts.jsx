function PartOne({ showPartOne, setShowPartOne }) {
  return (
    <div>
      {showPartOne ? <div>partOne</div> : null}
      <button
        onClick={() => {
          setShowPartOne(true);
        }}
      >
        showPartOne
      </button>
    </div>
  );
}

function PartTwo({ showPartOne, setShowPartOne }) {
  return (
    <div>
      {!showPartOne ? <div>partTwo</div> : null}
      <button
        onClick={() => {
          setShowPartOne(false);
        }}
      >
        showPartTwo
      </button>
    </div>
  );
}

export { PartOne, PartTwo };
