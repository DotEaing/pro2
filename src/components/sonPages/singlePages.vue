<template>
  <div>
    <div class="singlePages">

  <div class="mid">

  <div class="view-show cl">

    <div class="show01">
    <div class="pub"> </div>
      <ul>
        <li>
        <span><img src="@/assets/img/k_img/07/(2).jpg" alt="5"></span>
        <div class="box2">
         
            <!-- <i class="img_list"  v-for="(itmes,index) of single " :key="index">
              <img :src="itmes.src" alt="" srcset="">
            </i> -->

              <swiper :options="swiperOption">
                  <swiper-slide v-for="(itmes, index) in single" :key="index" class="img_list"> 
                      <img :src="itmes.src" alt="" srcset="" >
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
          
        </div>
        </li>
          <li>
          <div :style="bg" class="box2">
              <em class="e01"></em>
              <em class="e02"></em>
              <em class="e03"></em>
              <em class="e04"></em>
          </div>

          </li>
      </ul>
      </div>
    </div>
    </div>
    </div>
</div>
</template>

<script>
import {mapState,mapActions,mapGetters,mapMutations} from "vuex"
export default {
  data(){
    return{
      name:"寄我此生",
      bg:{
        backgroundImage:"url("+require("@/assets/img/common/sonPages/kp_gg.png"),
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center",
      },

        swiperOption: {
            autoplay:{
              delay:4000
            },
            loop:true,
            slidesPerView :10,
            centeredSlides : false,
            spaceBetween : 50,
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

    methods:{
      ...mapActions(["get_single_k_Img"]),
      get_single_Imgs(url,name){
        var obj={url,name}           
        this.get_single_k_Img(obj);  //这里只能传一个值！！！
      }
    },
     computed:{...mapState({single:state=>state.card.single})},
     created(){

       this.get_single_Imgs("/singlePages",this.name);

     }
}
</script>

<style scoped>
.singlePages{
  background: #001a26;
}
.singlePages .view-show{
      margin-top: 50px;
}

.singlePages .view-show .show01{
  float: left;
  width: 79%;
}

.singlePages .view-show .show01 .pub {
    text-align: right;
    margin: 10px 0;
}

.singlePages .view-show .show01 li {
    margin-bottom: 60px;
    border: 1px solid #404f4a;
}

.singlePages .view-show .show01 li span {
    display: block;
    margin: 10px;
    text-align: center;
}

.singlePages .view-show .show01 li .span1 {
   height: 100px;
}

.singlePages .view-show .show01 li span img {
    width: auto;
    max-width: 100%;
    max-height: 650px;
    height: auto;
    border: 1px solid #7f7d6e;
}

.singlePages .view-show .show01 li .box2 {
    position: relative;
    border: 1px solid #2b3d41;
    height: 120px;
    margin: 10px;
    padding: 10px;
    
   
}
.singlePages .view-show .show01 li .box2 .img_list{
width: auto;
}

.singlePages .view-show .show01 li .box2 .img_list img{
  width: auto;
  height: 120px;

  border: 1px solid #2b3d41;
}

.singlePages .view-show  .show01 li .box2 em{

	display: block;
    position: absolute;
    width: 6px;
    height: 6px;
    background: #001a26;

}

.singlePages .view-show  .show01 li .box2 em.e01{

	border-right: 1px solid #2b3d41;
    border-bottom: 1px solid #2b3d41;
    border-left: 1px solid #001a26;
    border-top: 1px solid #001a26;
    top: -1px;
    left: -1px;

}

.singlePages .view-show  .show01 li .box2 em.e02{

	border-left: 1px solid #2b3d41;
    border-bottom: 1px solid #2b3d41;
    border-right: 1px solid #001a26;
    border-top: 1px solid #001a26;
    top: -1px;
    right: -1px;

}

.singlePages .view-show  .show01 li .box2 em.e03{

	border-right: 1px solid #2b3d41;
    border-top: 1px solid #2b3d41;
    border-left: 1px solid #001a26;
    border-bottom: 1px solid #001a26;
    bottom: -1px;
    left: -1px;

}

.singlePages .view-show  .show01 li .box2 em.e04{

	border-left: 1px solid #2b3d41;
    border-top: 1px solid #2b3d41;
    border-right: 1px solid #001a26;
    border-bottom: 1px solid #001a26;
    bottom: -1px;
    right: -1px;

}

.swiper-container div{
width: auto !important;
}

.swiper-button-prev {
width: 50px !important;
}

.swiper-button-next{
width: 50px !important;
}

</style>