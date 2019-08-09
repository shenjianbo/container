<template>
    <div class="index-container">
        <topNav @login="login" @register="register"></topNav>
        <Dialogui
            :visibel="visibel"
            @handel="handel" 
            :title="title"
        >
            <div class="content-con">
                <p>
                    <span>用户名：</span>
                    <input type="text" ref="user"/>
                </p>
                <p>
                    <span>密码：</span>
                    <input type="password" ref="pwd"/>
                </p>
            </div>
            <p class="tip" v-show="errorTip">{{errorTip}}</p>
        </Dialogui>
        <!-- <Elswiper :swiperData="imgData" :options="options"></Elswiper> -->
        <Button></Button>
    </div>
</template>
<script>
import evHub from '../../common/evHub.js';
import {Button} from 'element-ui';
import './style.scss';
import topNav from '../../components/top-nav/index.vue';
import Dialogui from '../../components/dialogui/index.vue';
import Elswiper from '../../components/elswiper/index.vue';
import IMG1 from '../../../static/images/123.jpg';
import IMG2 from '../../../static/images/456.jpg';
export default {
    name: 'index',
    components: {
        topNav,
        Dialogui,
        Elswiper,
        Button
    },
    data() {
        return {
            visibel: false,
            title: '登录',
            errorTip: '',
            type: 'login',
            dialogVisible: false,
            imgData: [
                {
                    template: `<img src=${IMG1} >`
                },
                {
                    template: `<img src=${IMG2} >`
                }
            ],
            options: {
                autoplay: true,
                loop: true
            },
            a: ''
        }
    },
    mounted() {
        evHub.$on('a.b', data => {
            this.a = data;
            console.log(data);
        })
    },
    methods: {
        fn() {
            this.$router.push({
                path: '/sub1',
                query: {
                    id: 123,
                    aa:456
                }
            });
        },
        login() {
            this.title = '登录',
            this.visibel = true;
            this.type = 'login';
        },
        loginServer(params) {
            this.$axios.post('/login/do', params).then(res => {
                console.log(res);
                if(res.status === 200) {
                    this.visibel = false;
                }
                else {
                    this.errorTip = res.error;
                }
            })
        },
        registerServer(params) {
            this.$axios.post('/register/do', params).then(res => {
                console.log(res);
                if(res.status === 302) {
                    this.title = '登录';
                    this.type = 'login';
                    this.errorTip = '';
                }
                else {
                    this.errorTip = res.error;
                }
            })
        },
        handel(flag) {
            const {user, pwd} = this.$refs;
            const params = {
                username: user.value,
                password: pwd.value
            }
            if(flag) {
                if(this.type === 'login') {
                    this.loginServer(params);
                }
                else if(this.type === 'register') {
                    this.registerServer(params);
                }
            }
            else {
                this.visibel = false;
                this.errorTip = '';
                user.value = '';
                pwd.value = '';
            }
        },
        register(flag) {
            this.title = '注册',
            this.visibel = true;
            this.type = 'register';
        }
    }
}
</script>

