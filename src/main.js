import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import './assets/styles/global.scss'

const app = createApp(App)
const head = createHead()

app.use(head)
app.mount('#app')
