import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import NavigationMenu from './components/nagivation-menu/nagivation-menu-component.vue';

Vue.component('navigation-menu', NavigationMenu);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
