import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import firebase from 'firebase';
import App from './App.vue';
import 'firebase/firestore';
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBNmrVRNciqoVtylbMhwBwbXtSf7KHWstU',
  authDomain: 'vue-todo-d74fb.firebaseapp.com',
  projectId: 'vue-todo-d74fb',
  storageBucket: 'vue-todo-d74fb.appspot.com',
  messagingSenderId: '1042395240161',
  appId: '1:1042395240161:web:ee7792eed181aba71189a0',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
