<template>
    <div class="dialog-container" v-show="visibel">
        <div class="mark">
            <div class="top-con">
               <div class="title" v-text="title"></div>
               <span v-if="iconClose" class="close" @click="cancel"></span>
            </div>
            <div v-if="!content" class="slot">
                <slot></slot>
            </div>
            <section v-else-if="content" class="content" v-html="content">
            </section>
            <div class="btn">
                <button v-if="btns[0]" @click="confirm" v-text="btns[0]"></button>
                <button v-if="btns[1]"  @click="cancel" v-text="btns[1]"></button>
            </div>
        </div>
    </div>
</template>
<script>
import './style.scss';
export default {
    name: 'dialogui',
    props: {
        visibel: {
            type: Boolean,
            default: false
        },
        btns: {
            type: Array,
            default: function() {
                return ['确认',' 取消']
            }
        },
        iconClose: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    },
    methods: {
        confirm() {
            this.$emit('handel', true);
        },
        cancel() {
            this.$emit('handel', false);
        }
    }
}
</script>

