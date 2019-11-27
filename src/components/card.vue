<template>
  <div>
      <div class="card" v-for="(cons,index) in con" :key="index">
          <router-link :to="cons.addr" >
               <span>
                   <img :src="cons.img" :alt="cons.text" width="382" height="256">
                </span>
                <div class="cl">
                    <h3 class="s">{{cons.text}}</h3>
                    <em class="fa fa-angle-right fa-lg"></em>
                </div>
          </router-link>
  </div>
  </div>
</template>

<script>
export default {
    // props:["con"],
    data(){
        return{
            // t:"#",
            //  con:[{text:"快意江湖",addr:"#",img:require("@/assets/img/sm_carouserl/1.jpg")}],
        }
    }
}
</script>

<style>
.card{
    width: 306px;
    overflow: hidden;
}

.card a,span{
    display: block;
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
    width: 80%;
}
.fa{
     color: #dfcca1;
}
</style>