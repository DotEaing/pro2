<template>
  <div>
    <div class="login_box cl" :style="bg">
        <div class=" mid pos_rel">
          <div class="login_body rf pos_abs">
            <!-- 登录账号 -->
           <div class="title  flex ">
            <div class="logo">
               <img src="@/assets/img/common/logo.png" alt="" class="">
            </div>
                 <span class="name">
                  完善信息
                 </span>
           </div>
           <hr>
           <br>
           <div class="main">
                <div class="text">
                  <label class="title">昵称 : </label>
                  <input type="text" class="innerBox" v-model="form.phone" placeholder="输入昵称（以后可更改）" name="uname" required autofocus>
                </div>
           </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/login.css"
import {mapState,mapActions} from 'vuex'
export default {
data(){
  return{ 
  }
},

computed:{
  ...mapState({
    form:state=>state.login.form,
    bg:state=>state.login.bg,
  })
}
}
</script>

<style scoped>
.login_box .login_body{
  right:33% ;
  top: 70px;
}
.login_box .main .text{
  text-align: center
}

.login_box .main .text .title{
    text-align: right;
    vertical-align: middle;
    /* float: left; */
    font-size: 16px;
    color: #dfcca1;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
}
.login_box .main .text .innerBox{
      width: 60%;
      height: 30px;
      line-height: 30px;
      background-color:rgba(0, 0, 0, 0);
      border:rgba(0, 0, 0, 0);
      border-bottom: 1px solid #dfcca1;
      border-radius: 0px;
      

}

</style>