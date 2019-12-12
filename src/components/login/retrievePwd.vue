<template>
  <div>
    <div class="box" :style="bg">
        <div class="login_box mid pos_rel">
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
  /* height: 400px; */
  right:0% ;
  top: 100px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, .5);
  border-radius: 5px;
  padding: 30px 15px 60px;
}


/* 登录 */
.title .logo img{
  height: 50px;
  padding: 10px;
}

.title .name{
  width: 100%;
  text-align: center;
  padding: 11px;
  font-size: 30px;
  color: #dfcca1;
}

.main .text{
      margin-bottom: 20px;
      font-size: 14px;
      display: inline-block;
      width: 100%;
}

.main .text .innerBox{
    padding-right: 30px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 35px;
    line-height: 35px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}

.main .text span em {
    position: relative;
    top: -25px;
    float: right;
    margin-right: 20px;
    cursor: pointer;
}

.main .chose .chose-box{
  width: 50%;
}

.main .chose a {
    padding-left: 10px;
    padding-right: 10px;
    color: #dfcca1;
    font-size: 16px;
    cursor: pointer;
} 

.main a:hover{
  color: #f8d3a5;
}


.main .button_login{
    width: 100%;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #dfcca1;
    border: 1px solid #dcdfe6;
    border-color: #dfcca1;
    color: #000;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 20px
}

.main .button_login:hover{
 background: #f8d3a5;
}

/* 注册 */

.reg_code{
    width: 120px;
    height: 40px;
}

</style>