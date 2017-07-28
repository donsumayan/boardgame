// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons';
import '../node_modules/vuetify/dist/vuetify.min.css';
import App from './App';
import router from './router';
import tile from './components/tile';
import board from './components/board';

Vue.use(Vuetify);
Vue.config.productionTip = false;

// Declare components here
Vue.component('tile', tile);
Vue.component('board', board);
Vue.component('icon', Icon);

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
