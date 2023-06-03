import modelAbstract from "./modelAbstract";

export default class strawModel extends modelAbstract implements IModel {
    renderModel(): void {
        super.draw('straw')
    }
}
