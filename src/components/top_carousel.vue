<template>
<div>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"> 
        <img :src="slide.src" alt="" srcset="">
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
        return {
        swiperOption: {
            autoplay:{
              delay:5000
            },
            loop:true,
            effect : 'fade',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                },
        },
        swiperSlides: [
            {no:1,src:require("@/assets/img/carousel/(1).jpg")},
            {no:2,src:require("@/assets/img/carousel/(2).jpg")},
            {no:3,src:require("@/assets/img/carousel/(3).jpg")}
            ]
      }
    },
    // mounted() {
    //   setInterval(() => {
    //     console.log('simulate async data')
    //     if (this.swiperSlides.length < 10) {
    //       this.swiperSlides.push(this.swiperSlides.length + 1)
    //     }
    //   }, 3000)
    // }
  }
</script>