// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Icons from 'vue-awesome/components/Icon';
import 'vue-awesome/icons';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// Declare components here
Vue.component('icon', Icons);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
