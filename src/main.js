// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* css support */
import 'normalize.css'
import '@/assets/css/reset.css'

// js vendors && plugins
import './plugins/element.js'
import VueCookies from 'vue-cookies'
import VueLazyload from 'vue-lazyload'

Vue.use(VueCookies)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error:
    'data:image/png;base64,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',
  loading:
    'data:image/png;base64,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',
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
