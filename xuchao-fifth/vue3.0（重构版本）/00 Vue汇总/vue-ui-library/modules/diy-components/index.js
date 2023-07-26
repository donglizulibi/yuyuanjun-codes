import Transfer from './Transfer/Transfer'
import Magnifier from "./Magnifier/Magnifier"
import TableEdited from "./Table/TableEdited"

// console.log(Table)

const components = {
    Transfer,
    Magnifier,
    TableEdited
}

export {
    Transfer,
    Magnifier,
    TableEdited
}

export default {
    install(app) {
        for (let comp in components) {
            app.component(comp, components[comp])
        }
    }
}