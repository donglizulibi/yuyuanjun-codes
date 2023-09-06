import React from "react";
import Board from "./Child/Board";
import History from "./Child/History";

function calculateWinner(squares) {
  const winnerConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerConditions.length; i++) {
    const [a, b, c] = winnerConditions[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      //   console.log(1123);
      return squares[a];
    }
  }

  const filledSquares = squares.filter((item) => item === "X" || item === "O");
  if (filledSquares.length === 9) {
    return "Nobody";
  }

  //   forEach无法跳出循环
  //   winnerConditions.forEach((item) => {
  //     const [a, b, c] = item;
  //     // console.log(squares);
  //     // console.log(squares[a]);
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       console.log(1123);
  //       return `${squares[a]} is winner`;
  //     }
  //   });
  return null;
}

function TicTacToe() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  console.log(history);

  // 为了避免游戏结束之后，点击查看历史步骤的时候，还能继续下棋的问题
  // 使用useState这个hook来定义winner，初始值是undefined

  // 在没有设置hook的时候，winner的值是在每一次落子的点击事件之后
  // 由calculateWinner函数来决定winner是否有值

  // 设置了hook之后，在游戏结束之前，winner的值都是undefined
  // 进入到calculateWinner函数的判断中，result也是null，则不会改变winner的值
  // 当结束游戏的点击事件发生之后，进入到判断中，执行calculateWinner函数
  // 输出结束游戏的赢家，并赋值给result，然后通过setWinner赋值给新的winner
  // 表示一局游戏已经结束

  // 此时再点击回溯历史步骤的列表项目，并不会改变这个组件内winner的值
  // 也就不会改变这个组件传递到子组件的winner的值
  // 在子组件中判断游戏结束的变量会显示为结束，棋盘也就不能再继续落子

  const [winner, setWinner] = React.useState(undefined);
  //   const winner = calculateWinner(squares);

  if (!winner) {
    const result = calculateWinner(squares);
    console.log(result);
    if (result) {
      setWinner(result);
    }
  }

  // 使用Board组件的点击事件来控制history的数据
  const handleSquareChange = (newSquares) => {
    console.log(newSquares);
    setSquares(newSquares);
    setHistory([...history, newSquares]);
    console.log(history);
  };

  // 这个组件的History子组件在元素上绑定了点击事件，点击后传递参数
  // 然后触发在父组件上定义的handleHistoryChange函数
  // handleHistoryChange这个函数主要是根据参数来找到history容器的数组项目
  // 然后这个数组项目传入setSquares以改变棋盘布局
  const handleHistoryChange = (index) => {
    const newSquares = history[index];
    setSquares(newSquares);
  };
  return (
    <div className="game">
      <div className="game-board">
        <Board
          winner={winner}
          squares={squares}
          onChange={handleSquareChange}
        />
      </div>
      <div className="game-history">
        {winner ? (
          <History onChange={handleHistoryChange} history={history} />
        ) : null}
      </div>
    </div>
  );
}

export default TicTacToe;
