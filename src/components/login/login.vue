<template>
  <div>
    <div class="box" :style="bg">
        <div class="login_box mid pos_rel">
          <div class="login_body rf pos_abs">
           <div class="title dd">
            <div class="logo dd lf">
               <img src="@/assets/img/common/logo.png" alt="">
            </div>
            <span>
              <h3>
                登录账号
              </h3>
            </span>
           </div>

          <form action="" method="get">

          </form>

          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    bg:{
      backgroundImage:"url("+require("@/assets/img/common/login_bg.jpg"),
      backgroundRepeat: "no-repeat",
      backgroundPosition:"center",
      // backgroundSize: "cover"
    }
  }
}
}
</script>

<style scoped>
.dd{
  border: red 2px solid;
}

.box{
  height: 730px;
  width: 100%;
  /* position: relative; */
}

.login_body{
  /* border: red 2px solid; */
  width: 400px;
  height: 350px;
  right:0% ;
  top: 100px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, .5);
}

.logo{
  height: 15%;
}

.title img{
  height: 50px;
}


</style>