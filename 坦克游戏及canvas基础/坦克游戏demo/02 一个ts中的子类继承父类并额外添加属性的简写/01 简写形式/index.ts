
class User{
    // 设置类的共享属性见js-12-4
    arr = []
    constructor(
        protected app = document.querySelector<HTMLDivElement>(".app")!,
        protected el = document.createElement("span"),
        public node:number = el.nodeType 
    ){}
}

class Render1 extends User{
    randerOneParams = 'render1'
}
class Render2 extends User{
    randerTwoParams = 'render2'
    constructor(){
        super()
    }
}

console.dir(User)
console.log(new Render1())
console.log(new Render2())