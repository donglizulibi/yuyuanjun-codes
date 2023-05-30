import config from "../config";

export default abstract class canvasAbstract{
    constructor(
        protected app = document.querySelector<HTMLDivElement>("#app")!,
        protected el = document.createElement('canvas'),
        protected canvas = el.getContext("2d")!
    ){
        el.width = config.canvas.width
        el.height = config.canvas.height
        app.insertAdjacentElement("afterbegin",el)
        
    }
}