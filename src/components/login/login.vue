<template>
  <div >
    <div class=" login_box cl" :style="bg">
        <div class=" mid pos_rel">
          <div class="login_body rf pos_abs">
            <!-- 登录账号 -->
           <div class="title  flex ">
            <div class="logo">
               <img src="@/assets/img/common/logo.png" alt="" class="">
            </div>
                 <span class="name">
                  登录账号
                 </span>
           </div>
           <hr>
           <br>
              <div class="main">
                <div class="text">
                  <input type="text" class="innerBox" v-model="form.phone" placeholder="请输入您的手机号" name="phone" required autofocus>
                  <span><em class="fa fa-times-circle" aria-hidden="true" @click="reset()"></em></span>
                </div>
                <div class="text">
                  <input type="password" class="innerBox" v-model="form.upwd" id="password" placeholder="请输入您的密码" name="upwd" required="" minlength="6" maxlength="15">
                  <span><em class="fa fa-times-circle" aria-hidden="true" @click="reset()"></em></span>
                </div>
               <div  class="chose">
                 <div  class="lf chose-box" >
                   <div>
                     <a  @click="to2">注册账号</a>
                  </div>
                </div> 
                    <div  class="rf chose-box">
                      <div style="text-align: right;">
                        <a @click="to3()">忘记密码?</a>
                        </div>
                    </div>
                </div>
                <input class="button_login" type="button" value="登录" @click="bt_login()">
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
methods:{
  ...mapActions(["myclear","bt_login"]),

  // 清空表单
  reset(){
    this.myclear();  // 同this.$store.commit("reset1");
  },

  // 跳转
  to2(){this.$router.push("/register");this.reset()},
  to3(){this.$router.push("/retrievePwd"); this.reset()},

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



</style>