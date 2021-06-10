import Vue from 'vue'
import App from './App.vue'

// 全量引入
// import JUI from '../../packages'
// Vue.use(JUI)

// 按需引入
import JButton from '../../packages/Button/index.js'
import JTest from '../../packages/Test/index.js'
Vue.use(JButton)
Vue.use(JTest)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
