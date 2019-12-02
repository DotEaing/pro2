<template>
  <div>
    
      <ul class="news cl mid">
        <li>
          <img src="@/assets/img/common/j1.jpg" alt="" srcset="">
        </li>
        <li v-for="(items,index) of item" :key="index" v-if=" index<= 3">
          <router-link :to="items.link">
              <span>{{items.date}}</span>
              <h3 class="s">{{items.title}}</h3>
              <p>{{items.text}}</p>
          </router-link>
        </li > 
        <li>
          <img src="@/assets/img/common/j2.jpg" alt="" srcset="">
        </li>
      </ul>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data(){
    return{
     bg1:{backgroundImage:require("@/assets/img/sm_carouserl/1.jpg")},
     bg2:{}

    }
  },
  computed:{
    ...mapState({
      item:state=>state.news.item
    })
  }
}
</script>

<style scoped>

.news li {
    float: left;
    width: 33.333%;
    height: 250px;
    overflow: hidden;

}

.news li img{
  width: 100%;
}

.news li a {
    display: block;
    padding: 38px 30px;
    color: #dfcca1;
    border-right: 1px solid #2e3b41;
    border-bottom: 1px solid #2e3b41;
    transition: all .3s;
    background: #011c27;
}

.news li a:hover{
background: #2e3b41
}


.news li span {
    display: block;
    font-weight: bold;
    margin-bottom: 68px;
    font-family: Georgia;
}

.news li h3 {
    font-size: 24px;
    margin-bottom: 13px;
}

.s {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
}

.news li p {
    font-family: "SimSun";
    line-height: 20px;
    height: 38px;
    overflow: hidden;
    text-indent:25px;
    font-size: 12px;
    text-align: justify; 
}
</style>