import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Test from '@/components/Test';
import Dama from '@/components/dama/Board';
import Tile from '@/components/Tile';

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
    {
      path: '/tile',
      name: 'tile',
      component: Tile,
    },
  ],
});
