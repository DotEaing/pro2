<template>
<div class="main">
    <div>
    <!-- line -->
    <div class="Line">
        <Line_1 :con1="con1"></Line_1>
    </div>
    <!-- workPlaces -->
    <div class="workPlaces mid cl">
        <sm_carousel :con="new_swiperSlides"></sm_carousel>
    </div>
    <!-- line -->
    <div class="Line">
        <Line_1 :con1="con2"></Line_1>
    </div>
    <!-- workPlaces -->
    <div class="workPlaces mid cl">
        <card :con="client"></card>    
    </div>
    <!-- line -->
    <div class="Line">
        <Line_1 :con1="con3"></Line_1>
    </div>
    <!-- workPlaces -->
    <div class="workPlaces mid cl">
        <card2></card2>
    </div>
    <!-- line -->
    <div class="Line">
        <Line_1 :con1="con4"></Line_1>
    </div>
    <!-- workPlaces -->
    <div class="workPlaces mid cl">
        <news></news>
    </div>
    </div>
</div>
    
</template>

<script>
const Line_1 =()=> import( "@/components/indexComponents/Line_1.vue")
const sm_carousel  =()=> import( "@/components/indexComponents/sm_carousel.vue")
const card  =()=> import( "@/components/indexComponents/card.vue")
const card2  =()=> import( "@/components/indexComponents/card2.vue")
const news  =()=> import( "@/components/indexComponents/news.vue")
import {mapState,mapActions,mapGetters,mapMutations} from "vuex"
export default {
    data(){
        return{
          
            }
    },
    
    methods:{
        ...mapActions(["get_n_Img","get_k_Img"]),
        ...mapMutations(["reset_card"]),
        get_n_img(url){
          this.get_n_Img(url);
        },
        get_k_img(url){
          this.get_k_Img(url);
        }
    },
    

    computed:{
        ...mapState({
        con1:state=>state.work_modules.con1,
        con2:state=>state.work_modules.con2,
        con3:state=>state.work_modules.con3,
        con4:state=>state.work_modules.con4
        }),
        ...mapState({client:state=>state.card.client}),
        ...mapState({new_swiperSlides:state=>state.card.new_swiperSlides})
    },

    components:{
        "Line_1":Line_1,
        // "sm_carousel":resolve=>setTimeout((require(['@/components/indexComponents/sm_carousel.vue'],resolve)),0),
       "sm_carousel":sm_carousel,
       "card":card,
        "card2":card2,
        "news":news

    },
    created(){
        // this.reset_card()
        },
    mounted(){
        this.client==""?this.get_k_img("/home"):console.log(this.client);
        this.new_swiperSlides==""?this.get_n_img("/home"):console.log(this.new_swiperSlides);
        
    }
  

}
</script>

<style  scoped>
.main{
    background: #000
}
 .workPlaces{
     padding: 100px 0;
 }
</style>