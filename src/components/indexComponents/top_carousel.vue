<template>
<div>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"> 
        <img :src="slide.src" alt="" srcset="" style="width:100%">
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'carrousel',
    data() {
        return {
        swiperOption: {
            autoplay:{
              delay:4000
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
        
      }
    },
    computed:{
     ...mapState({
        swiperSlides:state=>state.top_carousel.swiperSlides
       })
  }
}
</script>