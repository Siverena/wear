import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
// import HelloWorld from '../pages/HelloWorld/HelloWorld';
// import HomePage from '../pages/HomePage/HomePage';


const HelloWorld = () => import('@/pages/HelloWorld/HelloWorld');
const HomePage = () => import('@/pages/HomePage/HomePage');

Vue.use(Router);


const router = new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    }
  ]
})


export default router;
