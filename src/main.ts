import { createApp } from 'vue'

// import { globalRegister } from './global'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import './service/axios_demo'
import hyRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// 注册element-plus
// app.use(globalRegister)
app.use(ElementPlus)
app.use(store as any)
app.use(router as any)

app.mount('#app')

hyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
