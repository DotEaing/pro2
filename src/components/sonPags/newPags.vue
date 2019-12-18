<template>
  <div>
      <div class="newPags ">
        <div class="mid "> 
            <div class="actytit">
                <img src="@/assets/img/common/sonPags/new.jpg"  width="1188" height="679">
            </div>

            <div class="workplase">
              <ul  class=" cl">

               <li class="card lf" v-for="(slides,index) of swiperSlides" :key="index">

                <router-link :to="slides.link" >
                    <span style="width:382px;height:256px">
                        <img :src="slides.src" :alt="slides.name" >
                    </span>
                    <div class="cl">
                        <h3 class="s">{{slides.name}}</h3>
                        <em class="fa fa-angle-right fa-lg"></em>
                    </div>
                </router-link>

               </li>
              </ul>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex"
export default {
data() {
  return{

  }
},
  computed:{...mapState({
          swiperSlides:state=>state.sm_carousel.swiperSlides
          })},
}

</script>

<style scoped>
.newPags{
  background: #001a26;
}
.actytit{
  text-align: center;
}

.workplase{
  margin-top: 30px;
}

.workplase ul{
 justify-content: center
}

/* card */

.card{
    /* width: 380px; */
    overflow: hidden;
    width: 30%;
    margin-right: 2%;
    margin-bottom: 2%;
}

.card a{
  
    display: block;
}

.card a,span{
    display: block;
    overflow: hidden;
    text-align:center
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
    width: 40%;
}
.fa{
     color: #dfcca1;
}


</style>