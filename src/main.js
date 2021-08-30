import { createApp  } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n/index'
import store from './store/index'



const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(store)
app.mount('#app')


export default app;
