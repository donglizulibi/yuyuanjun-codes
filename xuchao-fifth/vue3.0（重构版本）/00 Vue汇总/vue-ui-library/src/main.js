import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import diyComponents from "../modules/diy-components/index"

console.log(diyComponents)
const app = createApp(App);
// app.use(diyComponents)


app.mount("#app");