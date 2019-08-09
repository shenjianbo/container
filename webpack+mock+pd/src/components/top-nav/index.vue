<template>
    <div class="top-nav-container">
        <div class="fixed-width">
            <ul>
                <li>
                    <span>百度推广</span>
                    <span>百度开发者中心</span>
                </li>
                <li>
                    <span @click="login">登录</span>
                    <span @click="register">注册</span>
                    <span>服务商</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import './style.scss';
export default {
    name: 'topNav',
    data() {
        return {
            
        }
    },
    computed: {
        
    },
    methods: {
        login() {
            this.$emit('login');
        },
        register() {
            this.$emit('register');
        }
    }
}
</script>

