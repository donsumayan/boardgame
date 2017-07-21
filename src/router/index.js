import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Test from '@/components/Test';
import Dama from '@/components/dama/Board';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/dama',
      name: 'dama',
      component: Dama,
    },
  ],
});
