<template>
  <div>
     <div class="activeityPages ">
        <div class="mid "> 
            <div class="activeity">
                <img src="@/assets/img/common/sonPages/activeity_1.jpg"  width="646" height="683">
                <h2 style="text-align: center">
                  <img src="@/assets/img/common/sonPages/activeity_2.jpg" width="294" height="62" alt="">
                </h2>
            </div>
            <div class="workplase mid cl">
            <!-- 修改传入子组件的对象就可以 -->
               <ul>
                 <li v-for="(con,index) of aty_con" :key="index">
                    <a :href="con.link" target="_blank" :style="bg">
                      <span>
                        <img :src="con.src"  width="1159" height="612" alt="狂欢双11">
                      </span>
                        <h3>{{con.name}}</h3>
                    </a>
                  </li>
               </ul>
            </div>
        </div>
     </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data(){
    return{
       
    }
  },
      computed:{...mapState({
            aty_con:state=>state.activeity.aty_con,
            bg:state=>state.activeity.bg

            })},

}
</script>

<style scoped>
.activeityPages{
  background: #001a26;
}
.activeityPages .activeity{
  text-align: center;
}
.activeityPages .workplase{
  padding-top: 30px;
}

.activeityPages .workplase li {
    margin-bottom: 20px;
}
.activeityPages .workplase li a {
    display: block;
    padding: 22px;
   
}
.activeityPages .workplase li img {
    width: 100%;
    height: auto;
}
.activeityPages .workplase li h3 {
    text-align: right;
    height: 60px;
    padding-right: 16%;
    line-height: 78px;
    font-size: 20px;
    color: #dfcca1;
}
</style>