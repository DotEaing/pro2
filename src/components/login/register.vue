<template>
  <div>
    <div class="login_box" :style="bg">
        <div class=" mid pos_rel">
          <div class="login_body rf pos_abs">

            <div class="title  flex ">
            <div class="logo">
               <img src="@/assets/img/common/logo.png" alt="" class="">
            </div>
                 <span class="name">
                  注册账号
                 </span>
           </div>
           <hr>
           <br>
            <form id="form-login" method="get" action="/register">
              <div class="main">
                <div class="text">
                  <input type="text" class="innerBox" v-model="form.email" placeholder="请输入您的邮箱" name="email"  required autofocus >
                  <div class="mt--15"></div>
                </div>
                &nbsp;
                <br>
                 <div class="text">
                 <input type="text" class="innerBox" v-model="form.r_code"  placeholder="请输入验证码" name="code" required style="width:60%">
                  <div class="reg_code rf" @click="my_code1()">
                        <canvas ref="can1" width="100px" height="40px"  class="lf"></canvas>
                  </div>
                  <span></span>
                </div>
                &nbsp;
                <br>

               <div  class="chose">
                 <div  class="lf chose-box" >
                   <div>
                     <a style="font-size:12px"  @click="to1()" >【已有账号！直接登录】</a>
                  </div>
                </div> 
                    
                </div>
               <input class="button_login" type="button" value="下一步" @click="bt_register()">
              </div>
            </form>

          </div>
        </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/login.css"
import my_can from "@/assets/js/my_can"
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return{ 

    }
  },
  methods:{
  ...mapActions(["myclear"]),

  // 提交表单注册

  // 清空表单
  reset(){
    this.myclear();  // 同this.$store.commit("reset");
  },

  // 更新验证码
  my_code1(){
      my_can.mycanvas(this.$refs.can1);  // 
      this.code=my_can.mycanvas(this.$refs.can1)//验证码
  },

 // 跳转
  to1(){this.$router.push("/login");this.reset()},
  bt_register(){this.$router.push("/userInfor");}

},

computed:{
    ...mapState({
    form:state=>state.login.form,
    bg:state=>state.login.bg,
  })

},
mounted(){
    my_can.mycanvas(this.$refs.can1);
},

}
</script>

<style scoped>

</style>