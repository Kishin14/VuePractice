import Vue from 'vue'
import App from './App.vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import router from './router'
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDy2eta9ssIwcAcwAG6ow0gmbFFocLO30E",
  authDomain: "dbfb-1ac89.firebaseapp.com",
  databaseURL: "https://dbfb-1ac89-default-rtdb.firebaseio.com",
  projectId: "dbfb-1ac89",
  storageBucket: "dbfb-1ac89.appspot.com",
  messagingSenderId: "823007658934",
  appId: "1:823007658934:web:ff42b877f4461a905a3717",
  measurementId: "G-JQ1P9CLBWH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
