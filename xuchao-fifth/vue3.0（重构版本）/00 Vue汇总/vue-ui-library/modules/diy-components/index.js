import Transfer from './Transfer/Transfer'
import Magnifier from "./Magnifier/Magnifier"
import Table from "./Table/Table"

// console.log(Table)

const components = {
    Transfer,
    Magnifier,
    Table
}

export {
    Transfer,
    Magnifier,
    Table
}

export default {
    install(app) {
        for (let comp in components) {
            app.component(comp, components[comp])
        }
    }
}