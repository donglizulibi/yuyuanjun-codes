import Transfer from './Transfer/Transfer'
import Magnifier from "./Magnifier/Magnifier"



const components = {
    Transfer,
    Magnifier
}

export {
    Transfer,
    Magnifier
}

export default {
    install(app) {
        for (let comp in components) {
            app.component(comp, components[comp])
        }
    }
}