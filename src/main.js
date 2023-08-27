import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import iconComp from "./components/icons/icon-comp.vue"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('icon-comp', iconComp)

app.mount('#app')
