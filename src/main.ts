import { createApp } from 'vue'
// import App from './pages/01_Pinia的基本使用/App.vue'
import App from './pages/02_Pinia处理异步操作/App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .mount('#app')
