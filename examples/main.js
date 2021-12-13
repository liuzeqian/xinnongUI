import Vue from 'vue'
import App from './App.vue'

// 全部引入
import 'mooc-ui/dist/css/index.css'
import MUI from 'mooc-ui'
Vue.use(MUI)
Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')