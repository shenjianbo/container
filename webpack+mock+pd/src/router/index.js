import Router from 'vue-router';
import Vue from 'vue';
import Index from '../pages/index/index.vue';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router);

export default new Router({
    routes: [
        {
            redirect: '/index',
            path: '/'
        },
        {
            name: 'index',
            path: '/index',
            component: Index
        }
    ]
})