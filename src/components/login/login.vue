<template>
  <div>
    <div class="box" :style="bg">
        <div class="login_box">
          <form action="" method="get">

          </form>
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
 .box{
   height: 730px;
   display: flex
 }
.login_box{
  border: red 2px solid;
  width: 200px;
  height: 200px;
  flex:3
}



</style>