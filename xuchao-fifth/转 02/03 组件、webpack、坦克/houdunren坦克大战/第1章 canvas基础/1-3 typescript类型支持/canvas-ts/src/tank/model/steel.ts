import modelAbstract from "./modelAbstract";

export default class steelModel extends modelAbstract implements IModel {
    renderModel(): void {
        super.draw('steel')
    }
}
