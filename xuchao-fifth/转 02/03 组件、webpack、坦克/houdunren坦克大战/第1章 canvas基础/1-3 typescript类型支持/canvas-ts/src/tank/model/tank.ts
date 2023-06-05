import modelAbstract from "./modelAbstract";

export default class tankModel extends modelAbstract implements IModel {
    renderModel(): void {
        super.draw('tank')
    }
}
