<template>
  <div>
      <div class="Line" :style="background1">
        <div class="line-box wp cl" v-for="(item,index) of con1" :key="index">
          <h3 :style="{backgroundImage:item.bg}">
            <router-link :to="item.arr" class="rf">
                查看更多
              <span>
                {{item.act}}
                <em class="fa fa-angle-right fa-lg"></em>
              </span>
            </router-link>
          </h3>
        </div>
      </div>
       
  </div>
</template>

<script>
export default {
    props:["con1"],
    data(){
        return{
          background1:{
            backgroundImage:"url("+require("@/assets/img/common/xpfb.jpg")+")",
            backgroundRepeat: "no-repeat",
            backgroundSize:"covre"
            },
        }

    },
}
</script>

<style>
.dd{
  border:  red solid 1px
}

.Line{
 height: 180px;
}

.Line h3{
  display: flex;
  align-items:center;
  justify-content: flex-end
}

.wp {
    width: 1188px;
    margin: 0 auto;
}
.line-box h3{
    height: 160px;
}

.line-box a {
    display: block;
    
    width: 190px;
    height: 28px;
    line-height: 28px;
    border: 1px solid #5b6358;
    text-align: center;
    font-size: 19px;
    font-family: simsun;
    color: #fff;
    transition: all .3s;
}

.line-box a:hover{
  background-color: #002a36
}

.line-box a span {
    font-weight: normal;
    color: #dfcca1;
}

</style>