<template>
<div>
  <swiper :options="swiperOption">
    <swiper-slide  v-for="(slides,index) of swiperSlides" :key="index" > 
        <div class="card">

            <router-link :to="slides.addr" >
                <span>
                    <img :src="slides.img" :alt="slides.text" width="382" height="256">
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
</template>

<script>
import card from "@/components/card.vue"
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
             slidesPerView: 3,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 30,
                stretch: 10,
                depth: 60,
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
        },

        swiperSlides: [
           
            {text:"快意江湖",addr:"#",img:require("@/assets/img/sm_carouserl/1.jpg")},
            {text:"快意江湖",addr:"#",img:require("@/assets/img/sm_carouserl/1.jpg")},
            {text:"快意江湖",addr:"#",img:require("@/assets/img/sm_carouserl/1.jpg")},
            {text:"快意江湖",addr:"#",img:require("@/assets/img/sm_carouserl/1.jpg")}, 
            {text:"快意江湖",addr:"#",img:require("@/assets/img/sm_carouserl/1.jpg")},
            {text:"快意江湖",addr:"#",img:require("@/assets/img/sm_carouserl/1.jpg")},
            
            ]
      }
    },
    components:{
        card 
    }
    // mounted() {
    //   setInterval(() => {
    //     slidesole.log('simulate async data')
    //     if (this.swiperSlides.length < 10) {
    //       this.swiperSlides.push(this.swiperSlides.length + 1)
    //     }
    //   }, 3000)
    // }
  }
</script>

<style scoped>

.card{
    width: 306px;
    overflow: hidden;
}

.card a,span{
    display: block;
}

.card a img {
    width: 100%;
    height: auto;
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