import Vue from 'vue';
import App from './App.vue';
import vuex from 'vuex';
import store from './vuex/store';
import router from './router';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题

Vue.use(ElementUI);
Vue.use(store);
Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');