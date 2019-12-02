<template>
  <div>
    <ul class="mid cl">
     <li v-for="(items,index) of item" :key="index" class="card2" v-if="index<=5">
      <router-link :to="items.link">
        <span>
          <img :src="items.src" alt="汉唐风" width="344" height="344">
        </span>
        <ins class="cl">
          <em class="e01" :style="{backgroundImage:icon1}"></em>
          <h3 class="cl inline-block">{{items.name}}</h3>
          <em class="e02" :style="{backgroundImage:icon2}"></em>
        </ins>
        <!-- <div style="display: block; left: 0px; top: 439px;">
          <img src="" _src="" alt="汉唐风" width="344" height="344">
        </div> -->
      </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      

    }
  },
  computed:{
    ...mapState({
      icon1:state=>state.card2.icon1,
      icon2:state=>state.card2.icon2,
      item:state=>state.card2.item
  })}
}
</script>

<style scoped>

.card2{
    float: left;
    width: 32.333333%;
    margin-right: 1%;
    margin-bottom: 1%;
}

.card2 a{
    display: block;
    background: #011c27;
    position: relative;
    padding-top: 20px;
    border: 1px solid #2e3b41;
    padding-bottom: 30px;
    overflow: hidden;
}

.card2 span{
    display: block;
    padding: 10px;
    margin: 10px;
    border-radius: 50%;
    border: 1px solid #8c8472;
}

.card2 span img{
    width: 100%;
    height: auto;
    border-radius: 50%;
}

.card2 ins {
    display: block;
    text-decoration: none;
    font-size: 30px;
    font-family: simsun;
    color: #dfcca1;
    text-align: center;
    margin-top: 35px;
    line-height: 50px;
    height: 50px;
}

.card2 ins em {
    display: block;
    float: left;
    width: 29px;
    height: 34px;
    margin-top: 8px
}

.card2 ins em.e02 {
    float: right;
 }
</style>