<template>
  <div>
    <div class="login_box" :style="bg">
        <div class=" mid pos_rel">
          <div class="login_body rf pos_abs">

            <div class="title  flex">
            <div class="logo">
               <img src="@/assets/img/common/logo.png" alt="" class="">
            </div>
                 <span class="name">
                  修改密码
                 </span>
           </div>
           <hr>
           <br>

              <div class="main">
                
                <div class="text">
                  <input type="text" class="innerBox" v-model="form.phone" placeholder="请输入您的手机号" name="phone" required autofocus>
                 <div class="mt--15"></div>
                </div>

                <div class="text">
                  <input type="text" class="innerBox" v-model="form.email" placeholder="请输入您的邮箱" name="email"  required autofocus >
                  <div class="mt--15"></div>
                </div>
                &nbsp;
                <br>
                <div class="text">
                 <input type="text" class="innerBox" v-model="form.r_code" id="password" placeholder="请输入验证码" name="code" required style="width:60%">
                  <div class="reg_code rf" @click="my_code2()">
                        <canvas ref="can2" width="100px" height="40px"  class="lf"></canvas>
                  </div>
                  <span></span>
                </div>
                &nbsp;
                <br>

               <div  class="chose">
                 <div  class="lf chose-box" >
                   <div>
                     <a style="font-size:12px"  @click="to1()">【已有账号！直接登录】</a>
                  </div>
                </div> 
                </div>
                <input class="button_login" type="button" value="下一步" id="bt-register">
              </div>
          </div>
          </div>
          </div>
  </div>
</template>

<script>
import "@/assets/css/login.css"
import my_can from "@/assets/js/my_can"
import {mapState,mapActions } from 'vuex'
export default {
  data(){
    return{

    }
  },
  methods:{
 ...mapActions(["myclear"]),

  // 提交表单修改密码

 bt_login(){
    // 验证格式
    if(state.form.phone==""||!(/^13[234567890]\d{8}$/.test(this.form.phone))||this.form.phone.length<11){
            alert("请输入正确手机号11位");
            this.reset1()
            return
    }else if(this.form.upwd == '' || this.form.upwd.length < 6 || this.form.upwd.length > 16){
            alert("密码必须为字母加数字且长度6~16位");
            return
    };
  
        // 发送请求
          var phone= this.form.phone;
          var upwd = this.form.upwd;
          var obj = {phone,upwd};
          var url = "login";            
          this.axios.get(url,{params:obj}).then(res=>{
            console.log(res.data.code);
            var code=res.data.code;
            if (code) {
              
            }
            
          })
  },


  // 清空表单
  reset(){
    this.myclear();   // 同this.$store.commit("reset");
  },

  // 更新验证码
  my_code2(){
      my_can.mycanvas(this.$refs.can2);   // 同form.r_code=my_can.mycanvas(this.$refs.can2)
  },

  // 跳转
  to1(){this.$router.push("/login");this.reset()},
  },

  computed:{
  ...mapState({
    form:state=>state.login.form,
    bg:state=>state.login.bg,
  })
},
  
  mounted(){
    my_can.mycanvas(this.$refs.can2);
},

}
</script>

<style scoped>


</style>