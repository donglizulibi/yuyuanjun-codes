import { ref } from 'vue'
import getters from '@/store/getters'
const h1StateChecked = ref(getters.sidebarOpened)
export default h1StateChecked
