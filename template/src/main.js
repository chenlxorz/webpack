{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './store/'
{{/vuex}}

import global from './helper/global'
import filters from './filters/'
import directive from './directive/'

/* 全局变量，方法 */
Object.keys(global).forEach(key => {
    Vue.prototype[key] = global[key]
})

/* 全局过滤器 */
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

/* 全局指令 */
Object.keys(directive).forEach(key => {
    Vue.directive(key, directive[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
