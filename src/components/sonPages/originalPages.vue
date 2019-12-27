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
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters,mapMutations} from "vuex"
import card from "@/components/indexComponents/card.vue"
export default {
props:["name","head_img"],
data(){
  
  return{
    t:""
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
      
      get_y_k_img(url){
        this.get_k_Img(url);
        this.get_y_Img(url);
      },
      get_o_Img(url,name,head_img){
          var obj={url,name}           
          this.get_o_head_Img(obj);  //这里只能传一个值！！！
      }
  },

computed:{...mapState({
          original:state=>state.card.original,
         ogCommon:state=>state.card.ogCommon,
          })},

components:{
        card,
    },
    created(){
      
      this.original==""?this.get_y_k_img("/home"):console.log(this.original);
      
      if (this.ogCommon=="") {
         this.get_o_Img("/originalPages",this.name,this.head_img)
       }else {
        this.rester();
        this.get_o_Img("/originalPages",this.name,this.head_img)
       }

      console.log('==================================tt==');
      console.log(this.ogCommon);
    },


  }
</script>

<style scoped>
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