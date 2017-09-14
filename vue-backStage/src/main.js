import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题

Vue.use(ElementUI);
Vue.prototype.$axios = axios;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');