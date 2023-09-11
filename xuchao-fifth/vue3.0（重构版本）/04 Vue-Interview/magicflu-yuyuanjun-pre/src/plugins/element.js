import {
    ElButton,
    ElCalendar,
    ElTable,
    ElTableColumn,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
} from 'element-plus'

// export default (app) => {
//   app.use(ElButton)
// }

const components = {
    ElButton,
    ElCalendar,
    ElTable,
    ElTableColumn,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,

}


export default {
    install(app) {
        for (let comp in components) {
            app.component(comp, components[comp])
        }
    }
}