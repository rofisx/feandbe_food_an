import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue3} from 'bootstrap-vue-3'

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/main.css'

const app = createApp(App)

app.use(ToastPlugin);
app.use(router)

app.mount('#app')
