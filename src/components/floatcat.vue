<template>
  <div>
    <div class="floatcat " >
      <span class="ftbg" :style="bg1"></span>
      <div>
        <h3><img src="@/assets/img/common/ftlogo.png" width="144" height="162" alt=""></h3>
        <h4><img src="@/assets/img/common/liustyle.png" width="162" height="84" alt=""></h4>
          <ul class="default-pc-sidebar-ul ">
                <li  v-for="(items,index) of original_face" 
                    :key="index" 
                    @mouseenter="list_in($event)"
                  
                     :data-index="index"
                    class="">
                  <router-link :to="items.link" :style="bg3" ref="list" ><span></span>
                    {{items.name}}
                  </router-link>
                </li>
                
          </ul>
        <a class="back"  @click="toTop()" style="cursor:pointer">返回顶部</a>
      </div>
      <span class="ftbg" :style="bg2" ></span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import toTop from '@/assets/js/backTop.js'
export default {
data(){
  return{
    bg1:{
        backgroundImage:"url("+require("@/assets/img/common/bgtop.png"),
        backgroundRepeat: "on-repeat",
        // backgroundPosition:"center,top"
    },
     bg2:{
        backgroundImage:"url("+require("@/assets/img/common/bgft.png"),
        backgroundRepeat: "on-repeat",
        // backgroundPosition:"center,top"
    },
    bg3:{
        backgroundImage:"url("+require("@/assets/img/common/navbg01.png"),
        backgroundRepeat: "on-repeat",
        // backgroundPosition:"center,top"
    },
    bg4:{
        backgroundImage:"url("+require("@/assets/img/common/navbg02.png"),
        backgroundRepeat: "on-repeat",
        // backgroundPosition:"center,top"
    }
  }
},

methods:{
   toTop(){
           toTop.top()
       },

  list_in:function (e) {
    var dom = e.target
    var index = dom.getAttribute('data-index')
    var aa=this.$refs.list[index]
    // aa.style.color="#001a26"
    console.log(aa);
    
     
  }
},


computed:{
    ...mapState({
      icon1:state=>state.card.icon1,
      icon2:state=>state.card.icon2,
      original_face:state=>state.card.original_face,
  })
  }
}
</script>

<style scoped>

.floatcat {
    position: fixed;
    top: 120px;
    right: 5%;
    /* padding-top: 69px; */
    /* background: "url("+require("@/assets/img/common/bgtop.png") no-repeat center top; */
}

.floatcat div {
    width: 157px;
    padding: 0 10px;
    text-align: center;
    border: 1px solid #696e60;
    border-top: none;
    border-bottom: none;
    background: #001a26;
    padding-top: 60px;
}
.floatcat div h3 {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 46px;
    text-align: center;
    left: 0;
}
.floatcat div h3 img {
    width: 90px;
    height: auto;
}

.floatcat ul {
    margin-top: 30px;
}

.floatcat li {
    margin-bottom: 10px;
}

.floatcat li a {
    display: block;
    width: 161px;
    height: 40px;
    margin: 0 auto;
    line-height: 40px;
    font-size: 20px;
    font-family: simsun;
    font-weight: bold;
    color: #dfcca1;
    /* background: url(/temp/temp/52/52-0185/201811101034/images/nacbg01.png) no-repeat center center; */
}
.floatcat li a em {
    display: block;
    float: right;
    width: 29px;
    height: 34px;
    /* margin-top: 8px */
} 
.floatcat li a em.e02 {
    float: left;
 }

.floatcat span.ftbg {
    display: block;
    height: 69px;
    /* background: url(/temp/temp/52/52-0185/201811101034/images/bgft.png) no-repeat center bottom; */
}

.floatcat a.back {
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    color: #dfcca1;
    /* background: url(/temp/temp/52/52-0185/201811101034/images/backbg.png) no-repeat center center; */
}
</style>