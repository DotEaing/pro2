<template>
  <div>
      <div class="Line" :style="background1">
        <div class="line-box wp cl">
          <h3 :style="background2">
            <router-link :to="t.link" class="">
                查看更多
              <span>
                最新活动
                <em class="fa fa-angle-right fa-lg"></em>
              </span>
            </router-link>
          </h3>
        </div>
      </div>
       
       <div class="content">
         
       </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          t:{link:"#"},
          background1:{
            backgroundImage:"url("+require("@/assets/img/common/xpfb.jpg")+")",
            backgroundRepeat: "no-repeat",
            backgroundSize:"covre"
            },
          background2:{
            backgroundImage:"url("+require("@/assets/img/common/zuiixn.png")+")",
            backgroundRepeat:"no-repeat",
            backgroundSize:"covre"
            }


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