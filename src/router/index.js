import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '@/views/Home.vue';
// import Home from '@/components/HelloWorld.vue';
// import HelloWorld from '@/components/HelloWorld.vue';
import Hi from '@/components/Hi.vue';

Vue.use(VueRouter);

const routes = [
  //配置路由，这里是个数组
  {
    //每一个链接都是一个对象
    path: '/', //链接路径
    name: 'Home', //路由名称
    // component: Home, //对应的组件模板
    // component: HelloWorld, //对应的组件模板
    component: Hi //对应的组件模板
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about-views" */ '@/views/About.vue')
  },
  {
    path: '/hi',
    name: 'Hi',
    component: () => import(/* webpackChunkName: "hi-components" */ '@/components/Hi.vue')
  },
];

const router = new VueRouter({
  routes
});

export default router;
