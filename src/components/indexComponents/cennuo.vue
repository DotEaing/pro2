<template>
  <div>
       <div class="cennuo" :style="bg">
       <div class="cennuo_box">
         <div class="mid cl wp">
   
    <h3><img src="@/assets/img/common/cennuo.jpg" width="126" height="281" alt=""></h3>
    
            <ul class="cl">
            <li v-for="(items,index) of item" :key="index" :style="bg2">
                <span>
                <img :src="items.src">
                </span>
                <div class="cl">
                <p>{{items.txt1}}</p>
                <p>{{items.txt2}}</p>
                </div>
                </li>
            </ul>
   
        </div>
       </div>
     </div>
  </div>
</template>

<script>
    import { mapState } from "vuex";
export default {
    data(){
        return{

             bg:{
                backgroundImage:"url("+require("@/assets/img/common/tdy01.jpg"),
                backgroundRepeat: "repeat-x",
                // backgroundSize: "cover"
                },
            bg2:{
                backgroundImage:"url("+require("@/assets/img/common/tdy02.jpg"),
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
                },
    
        }
    },
        computed:{...mapState({
            item:state=>state.cennuo.item
        })}

}
</script>

<style  scoped>
.cennuo {
    /* margin-top: 100px; */
    height: 343px;
}
.cennuo h3 {
    float: right;
    margin-top: 30px;
}

.cennuo ul {
    float: right;
    margin-top: 48px;
}

.cennuo ul li {
    float: left;
    width: 70px;
    height: 260px;
    margin: 0 19px;
    
    }
.cennuo li span {
    display: block;
    width: 37px;
    height: 37px;
    margin: 20px auto;
    margin-bottom: 0;
}
.cennuo li span img {
    width: 99%;
    height: auto;
}
.cennuo li div {
    font-family: simsun;
    font-size: 16px;
    margin-top: 15px;
}

.cennuo li div p {
    float: left;
    width: 16px;
    text-align: center;
    margin-left: 11px;
    line-height: 1.3;
}

.wp{
    margin: 0 auto;
}
</style>