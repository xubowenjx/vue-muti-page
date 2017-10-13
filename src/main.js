// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import iView from 'iview';
import zhLocale from 'iview/dist/locale/zh-CN';
import enLocale from 'iview/dist/locale/en-US';
import Locales from './locale';
import './assets/index.less';
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false
Vue.use(VueI18n);
Vue.use(iView);
//设置国际化
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';

Vue.config.lang = lang;
const locales = Locales;
const mergeZH = Object.assign(zhLocale, locales['zh-CN']);
const mergeEN = Object.assign(enLocale, locales['en-US']);
Vue.locale('zh-CN', mergeZH);
Vue.locale('en-US', mergeEN);
/* eslint-disable no-new */

// 页面刷新时，重新赋值token
if (window.sessionStorage.getItem('token')) {
    store.commit('login', window.sessionStorage.getItem('token'))
}

new Vue({
  el: '#app',
  router,
    store,
  template: '<App/>',
  components: { App }
})
