import React from "react";
import Square from "./Square";


function getNextLetter(squares) {
  // 用棋子容器的长度，来判断现在的步数是奇数还是偶数
  const filledSquares = squares.filter((item) => item === "X" || item === "O");
  const filledNumber = filledSquares.length;
  const nextLetter = filledNumber % 2 === 0 ? "X" : "O";

  return nextLetter;
}

function Board({squares,winner,onChange}) {

  const nextPlayer = getNextLetter(squares);
  let isFinish = false;
  let status = undefined;

  if (winner) {
    isFinish = true;
    status = `${winner} is winner`;
  } else {
    status = `Next player is ${nextPlayer}`;
  }

  const clickHandler = (index) => {
    // 确保第二次点击同一个网格之后，不会改变原有的棋子
    // 判断这个网格位置的值是不是null

    const currentSquare = squares[index];
    if (currentSquare == null && !isFinish) {
      // 这里经行一个浅拷贝，新的数组改变不会影响原来数组的值
      // 然后把新数组作为参数传入setSquares方法中，来改变原数组并驱动页面改变
      const newSquares = squares.slice();
      newSquares[index] = nextPlayer;
      onChange(newSquares);
    }
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square onClick={clickHandler} index={0} value={squares[0]} />
        <Square onClick={clickHandler} index={1} value={squares[1]} />
        <Square onClick={clickHandler} index={2} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onClick={clickHandler} index={3} value={squares[3]} />
        <Square onClick={clickHandler} index={4} value={squares[4]} />
        <Square onClick={clickHandler} index={5} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onClick={clickHandler} index={6} value={squares[6]} />
        <Square onClick={clickHandler} index={7} value={squares[7]} />
        <Square onClick={clickHandler} index={8} value={squares[8]} />
      </div>
    </>
  );
}

export default Board;
