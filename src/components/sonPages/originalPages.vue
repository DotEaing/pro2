<template>
  <div>
    <div class="originalPages" >
      <!-- 大图 -->
   
      <div class="originalPages_header wp" >
  
        <div  v-for="(itmes,index) of ogCommon" :key="index" >
          <div class="og_head">
              <img :src="itmes.headSrc" alt="" srcset="" width="100%">
          </div>
          <div class="og_logo">
              <img :src="itmes.logoSrc"  width="374" height="453">
          </div>
      </div>
      </div>
        

        <div class="mid">
          <!-- logo -->
          <div class="activeity">
            <div class="mid--1000 ">
              <h2 style="text-align: center" class="">
                <!-- 标题 -->
              <div class="stylebg cl">
                    <span class="">
                      <img src="@/assets/img/common/sonPages/leftbg.png" alt="" srcset="" style="width:100%">
                    </span>
                    <span class="s02 " style="float:right">
                      <img src="@/assets/img/common/sonPages/rightbg.png" alt="" srcset="" style="width:100%">
                    </span>
                    <div class="cl">
                        <img src="@/assets/img/common/sonPages/new_2.png" alt="" srcset="" >
                    </div>
              </div>
              </h2>

            </div>
          </div>

          <div class="workplase mid cl">
            <!-- og_con是指vuex表单中的导入的原创风格表单 -->
             <card :con="original" ></card>   
          </div>
        </div>
      </div>
       <!-- <transition name="s_title"> -->
          <floatcat v-if="show"></floatcat>
       <!-- </transition> -->
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters,mapMutations} from "vuex"
import card from "@/components/indexComponents/card.vue"
import floatcat from "@/components/floatcat.vue"
export default {
props:["name","head_img"],
data(){
  
  return{
    t:"",
    show:false
  }
},


watch:{
  name(){
    window.history.go(0)
  }
},
  methods:{
    ...mapMutations(['reset_card',"sil_toObj"]),
      ...mapActions(["get_k_Img","get_y_Img","get_o_head_Img"]),
      
       rester(){
         this.reset_card()
      },
      
      get_y_img(url,name){
        var obj={url,name} 
        this.get_y_Img(obj);
      },
      get_o_Img(url,name,head_img){
          var obj={url,name}           
          this.get_o_head_Img(obj);  //这里只能传一个值！！！
      },

      handleScroll() {
      // let scrolltop = e.target.scrollTop;
      // ||document.documentElement.scrollTop ||document.body.scrollTop;
      var scrollTop =window.pageYOffset 
      scrollTop > 800 ? this.show = true : this.show = false;
    },
  },

computed:{
  ...mapState({
    original:state=>state.card.original,
      ogCommon:state=>state.card.ogCommon,
      }),
    },

            
components:{
        card,floatcat
    },
    created(){
      
      this.original==""?this.get_y_img("/original",this.name):console.log(this.original);
      
      if (this.ogCommon=="") {
        this.get_o_Img("/originalPages",this.name,this.head_img)
       }else {
         this.rester();
        this.get_o_Img("/originalPages",this.name,this.head_img)
       }

      // console.log('==================================tt==');
      // console.log(this.ogCommon);
    },

    mounted() {
      // console.log(this.name);
      
    　　// 此处true需要加上，不加滚动事件可能绑定不成功
        window.addEventListener("scroll", this.handleScroll, true);
      },

  }
</script>

<style scoped>
/* 动画 */
/* .s_title-enter-active, .s_title-leave-active{
    transition: opacity 
}

.s_title-enter, .s_title-leave-to{
    opacity: 0;
}
.s_title-leave, .s_title-enter-to{
    opacity: 1;
} */

.originalPages{
  background: #001a26;
}
.originalPages_header {
      padding-top: 0;
}
.originalPages_header div{
  text-align: center;
}
.originalPages_header .og_head img{
    width: 100%;
    height: auto;
}

.originalPages .activeity{
  text-align: center;
    margin: 50px 0;

}


.newPages .workplase{
  padding-top: 30px;
}

.stylebg {
    position: relative;
}
.stylebg span {
    display: block;
    height: 137px;
    float: left;
    width: 50%;
   
}

.og_logo{
    text-align: center;
    margin: 50px 0;
}

.stylebg div {
    position: absolute;
    top: 20px;
    width: 100%;
    height:100%;
    
}

</style>