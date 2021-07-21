import Vue from 'vue'
import App from './App.vue'
import router from './router'
// index.js 에서 생성했던 인스턴스를 등록함.
import vuetify from './plugins/vuetify'
// 이거는 vuetyfy 설치하면 자동으로 등록됨.


Vue.config.productionTip = false

new Vue({
  // index.js 에서 생성했던 인스턴스를 등록함.
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
