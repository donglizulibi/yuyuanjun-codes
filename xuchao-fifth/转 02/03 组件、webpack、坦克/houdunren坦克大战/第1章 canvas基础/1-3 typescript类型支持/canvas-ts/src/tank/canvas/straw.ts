import canvasAbstract from "./canvasAbstract"
import config from "../config"

class straw extends canvasAbstract{
   constructor(){
      super() 
   }
   render(): void {
      this.drawModels(config.straw.num)
   }
}

const strawApp = new straw()
console.log(strawApp)
export default strawApp