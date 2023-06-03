import modelAbstract from "./modelAbstract";

export default class waterModel extends modelAbstract implements IModel {
    renderModel(): void {
        super.draw('water')
    }
}
