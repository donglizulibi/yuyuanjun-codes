import './App.css'
import List from "./components/aList"
import Responsive from './components/bResponsive'
import TicTacToe from "./components/cTicTacToe"

function App() {

  return (
    <>
        <h4>在react中渲染列表</h4>
        <List></List>
        <br />
        <h4>数据的响应式</h4>
        <Responsive></Responsive>
        <br />
        <h4>TicTacToe游戏</h4>
        <TicTacToe/>


    </>
  )
}

export default App
