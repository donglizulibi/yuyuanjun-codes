import modelAbstract from "./modelAbstract";

export default class wallModel extends modelAbstract implements IModel {
    renderModel(): void {
        super.draw('wall')
    }
}
