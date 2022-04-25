import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import {createPinia } from 'pinia'

//规范css样式
import '@/assets/css/normalize.css';

const app = createApp(App)


app.use(router)
app.use(createPinia())
app.mount('#app')
