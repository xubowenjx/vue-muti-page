import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
Vue.use(Router)

const router= new Router({
   mode: 'history',
  routes: [
     {
      path: '*',
      name: '404',
       meta:{
        title:'404 Not found'
      },
     // component: Hello
      component: (resolve) => require(['../views/Nopage.vue'], resolve)
    },
    {
      path: '/',
      name: 'index',
       meta:{
        title:'首页'
      },
      component: (resolve) => require(['../views/Index.vue'], resolve)
    },
    {
      path: '/guide/introduce',
      name: 'Introduce',
      meta:{
        title:'Introduce page'
      },
      component: (resolve) => require(['../views/guide/Introduce.vue'], resolve)
    }, 
     {
      path: '/guide/design',
      name: 'designdesign',
      meta:{
        title:'design page'
      },
      component: (resolve) => require(['../views/guide/Design.vue'], resolve)
    }, 
    {
      path: '/component/install',
      name: 'install',
      meta:{
        title:'install page'
      },
      component: (resolve) => require(['../views/components/Index.vue'], resolve)
    }
  ]
})
 

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
    document.title = to.meta.title||'vue';
    next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
