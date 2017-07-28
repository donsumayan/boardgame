import vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import dama from '@/components/dama';

vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/dama',
      name: 'dama',
      component: dama,
    },
  ],
  mode: 'history',
});
