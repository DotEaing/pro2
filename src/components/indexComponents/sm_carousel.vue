<template>
<div>
    <div class="mid">

        <swiper :options="swiperOption">
            <swiper-slide  v-for="(slides,index) of swiperSlides" :key="index" > 
                <div class="card">

                <router-link :to="slides.addr" >
                    <span style="width:382px;height:256px">
                        <img :src="slides.img" :alt="slides.text" >
                    </span>
                    <div class="cl">
                        <h3 class="s">{{slides.text}}</h3>
                        <em class="fa fa-angle-right fa-lg"></em>
                    </div>
                </router-link>

            </div>
        </swiper-slide>
    <!-- <div class="lf">
        <card :con="slides"></card>
    </div> -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
    </div>
</div>
</template>

<script>
import card from "@/components/indexComponents/card.vue"
import { mapState} from "vuex"
  export default {
    name: 'carrousel',
    data() {
        return {
        swiperOption: {
            autoplay:{
              delay:5000
            },
            loop:true,
            effect : 'coverflow',
             slidesPerView: 4,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 18,
                stretch: 0,
                depth: 65,
                modifier: 2,
                slideShadows : true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                },
        }
      }
    },
    
     computed:{
        ...mapState({
        sm_carousel:state=>state.sm_carousel
        })
    },
         
  
  }
</script>

<style scoped>

.card{
    width: 306px;
    overflow: hidden;
}

.card a,span{
    display: block;
    overflow: hidden;
    text-align:center
}

.card a img {
    width: 382px;
    height: 256px;
}

.card div {
    line-height: 58px;
    padding: 0 20px;
    border: 1px solid #444f51;
    border-top: none;
    color: #dfcca1;
    background: #001a26;
    height: 58px;
    transition: all .3s;
}

.card div:hover{
    background: #dfcca1;
    color: #001a26;
}

.card div em {
    font-style: normal;
    width: 30px;
    height: 30px;
    float: right;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    background: #032b3e;
    margin-top: 15px;
}

.s {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
}
.card  div h3 {
    float: left;
    font-size: 17px;
    width: 80%;
}
.fa{
     color: #dfcca1;
}

</style>