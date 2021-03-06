import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'

// @ts-ignore
import VueHighcharts from 'vue3-highcharts';

//引入mock
import "@/mock/mock"

//规范css样式
import '@/assets/css/normalize.css'
import '@/assets/css/root.css'
import '@/assets/css/global.css'
import '@/assets/css/theme.css'

const app = createApp(App)


app.use(router)
app.use(createPinia())
app.use(VueHighcharts)
app.mount('#app')
