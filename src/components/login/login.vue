<template>
  <div>
    <div class="box" :style="bg">
        <div class="login_box mid pos_rel">
          <div class="login_body rf pos_abs">
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
           <form id="form-login">
              <div class="main">
                <div class="text">
                  <input type="text" class="innerBox" placeholder="请输入您的用户名" name="uname" id="uname" required="" autofocus="">
                  <span><img src="img/login/yhm.png"></span>
                </div>
                <div class="text">
                  <input type="password" class="innerBox" id="password" placeholder="请输入您的密码" name="upwd" required="" minlength="6" maxlength="15">
                  <span><img src="img/login/mm.png"></span>
                </div>
                <div class="chose">
                  <input type="checkbox" class="checkbox" id="ck_rmbUser" value="0">自动登录
                  <span>忘记密码？</span>
                </div>
                <input class="button_login" type="button" value="登录" id="bt-login">
              </div>
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
  border-radius: 5px;
  padding: 15px 30px;
}



.title .logo img{
  height: 50px;
  padding: 10px;
}

.title  .name{
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

.main .text img {
    position: relative;
    top: -30px;
    right: -300px;
}

</style>