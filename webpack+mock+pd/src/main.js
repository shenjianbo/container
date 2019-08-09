import Vue from 'vue';
import App from './app.vue';
import * as Server from './api/index.js';
import router from './router/index.js';
import 'swiper/dist/css/swiper.min.css';
Vue.prototype.$axios = Server;
process.env.NODE_ENV === 'development' && require('../mock/index.js');
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
