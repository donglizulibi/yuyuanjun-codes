// 在ts中，如果出现两个同名的interface接口
// 则后面的接口会把前面接口的内容合并
{
    interface AnimationInterface{
        move():void,
        name:string
    }
    interface AnimationInterface{
        end():void
        position:{x:number,y:number}
    }

    class Player implements AnimationInterface{
        position: { x: number; y: number } = {x:100,y:100}
        name:string = 'houdunren'
        move(): void {}

        end(): void {}
    }

    const player = new Player()
    console.log(player)
}