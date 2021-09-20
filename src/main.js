import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import {firestorePlugin} from 'vuefire'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { firestorePlugin } from 'vuefire/dist/packages/vuefire/src'

createApp(App).use(store).use(router).mount('#app')
