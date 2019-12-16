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
                  <label class="title">设置昵称 : </label>
                  <input type="text" class="innerBox" v-model="form.user_name" placeholder="输入昵称（以后可更改）" required autofocus>
                </div>

                <div class="text">
                  <label class="title" style=" padding-right:43px">性别 ：</label>
                  <label class="el-radio">
                    <span class="el-radio__input ">
                      <input type="radio" aria-hidden="" tabindex="-1" class=" el-radio__original" name="gender" v-model="form.gender" value="1">
                      <span class="el-radio__label">男<!----></span>
                    </span>
                  </label> 
                  <label class="el-radio">
                    <span class="el-radio__input">
                      <input type="radio" aria-hidden="" tabindex="-1" class=" el-radio__original" name="gender" v-model="form.gender" value="0">
                      <span class="el-radio__label"> 女<!----></span>
                    </span>
                  </label>                 
                </div>
            
                <div class="text">
                  <label class="title">设置电话号码 : </label>
                  <input type="text" class="innerBox" v-model="form.phone" placeholder="输入11位手机号码"  required autofocus>
                </div>

               <div class="text">
                  <label class="title">设置登陆密码 : </label>
                  <input type="password" class="innerBox" v-model="form.upwd" placeholder="输入密码"  required autofocus>
                </div>

                <div class="text">
                  <label class="title">重复输入密码 : </label>
                  <input type="password" class="innerBox" v-model="form.check_upwd" placeholder="重新输入密码"  required autofocus>
                </div>
                <input class="button_login" type="button" value="完成注册" @click="bt_register()">
             
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
  ...mapActions(["myclear","bt_register"]),

 // 清空表单
  reset(){
    this.myclear();  // 同this.$store.commit("reset1");
  },
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
/* ---------------------- */
.el-radio{
  color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
}

.el-radio__input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
}

.el-radio__original{
    opacity: 1;
    width: 16px;
    height: 16px;
    outline: none;
   
   
}
.el-radio__label{
      font-size: 16px;
    padding-left: 10px;
}
</style>