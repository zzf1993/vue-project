import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path:'/',
			redirect:'/login'
		},
		{
            path: '/login',//登录页
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
        	path:'*',//路径未定义跳转
        	component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
        	path:'/home',//主页
        	component: resolve => require(['../components/common/Home.vue'],resolve),
        	children:[
        		{
        			path:'/',
        			component: resolve => require(['../components/page/test.vue'],resolve)
        		},
                {
                    path:'/table',
                    component: resolve => require(['../components/page/table/Table.vue'],resolve)
                }
        	]
        }
	]
}); 