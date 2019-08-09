<template>
    <div class="swiper-container" v-if="swiperData && swiperData.length">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in swiperData" v-html="item.template" :key="'d_'+ index"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    name: 'elswiper',
    props: {
        swiperData: {
            type: Array
        },
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    mounted() {
        console.log(this.options)
        new Swiper('.swiper-container', {...this.options});
    }
}
</script>

