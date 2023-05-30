import canvasAbstract from "./canvasAbstract"

class straw extends canvasAbstract{
 constructor(){
    super()
    this.canvas.fillStyle = 'white'
    this.canvas.fillRect(0,0,100,100)
 }
}

const strawApp = new straw()
console.log(strawApp)
export default strawApp