import Vue from 'vue'
import App from './App.vue'
import PetForm from './components/petform/petform-component.vue'

Vue.component('pet-form', PetForm);
new Vue({
  el: '#app',
  render: h => h(App)
})
