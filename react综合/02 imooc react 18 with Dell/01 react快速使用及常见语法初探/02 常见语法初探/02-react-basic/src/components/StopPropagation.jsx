function StopPropagation() {
  const divStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid black",
    padding: "20px",
    margin: "auto",
  };
  const handleClick = () => {
    alert("box");
  };
  const handleInnerClickStop = (e) => {
    e.stopPropagation();
    alert("inner click");
  };
  const handleInnerClick = () => {
    alert("inner click");
  };

  return (
    <div onClick={handleClick} style={divStyle}>
      <button onClick={handleInnerClick}>冒泡</button>
      <br />
      <br />
      <button onClick={handleInnerClickStop}>阻止冒泡</button>
    </div>
  );
}

export default StopPropagation;
