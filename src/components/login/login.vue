<template>
  <div>
    <div class="box" :style="bg">
        <div class="login_box mid pos_rel">
          <div class="login_body rf pos_abs">
            <!-- 登录账号 -->
            <div v-show="show==1">
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
           <form id="form-login" method="get" action="/login">
              <div class="main">
                <div class="text">
                  <input type="text" class="innerBox" v-model="L_form.phone" placeholder="请输入您的手机号" name="uname" id="uname" required autofocus>
                  <span><em class="fa fa-times-circle" aria-hidden="true" @click="reset1"></em></span>
                </div>
                <div class="text">
                 <input type="password" class="innerBox" v-model="L_form.upwd" id="password" placeholder="请输入您的密码" name="upwd" required="" minlength="6" maxlength="15">
                  <span><em class="fa fa-times-circle" aria-hidden="true" @click="reset2"></em></span>
                </div>
               <div  class="chose">
                 <div  class="lf chose-box" >
                   <div>
                     <a  @click="to2">注册账号</a>
                  </div>
                </div> 
                     <div  class="rf chose-box">
                       <div style="text-align: right;">
                         <a @click="to3">忘记密码?</a>
                         </div>
                     </div>
                </div>
                <input class="button_login" type="submit" value="登录" @click="bt_login()">
              </div>
            </form>
          </div>

        <!-- 注册账号 -->
        <div v-show="show==2">
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
                  <input type="text" class="innerBox" v-model="R_form.email" placeholder="请输入您的邮箱" name="uname" id="uname" required autofocus >
                  <div class="mt--15"></div>
                </div>
                &nbsp;
                <br>
                 <div class="text">
                 <input type="text" class="innerBox" v-model="R_form.r_code" id="password" placeholder="请输入验证码" name="code" required style="width:60%">
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
                     <a style="font-size:12px"  @click="to1" >【已有账号！直接登录】</a>
                  </div>
                </div> 
                    
                </div>
                <input class="button_login" type="submit" value="下一步" id="bt-register">
              </div>
            </form>
        </div>

        <!-- 修改密码 -->
        <div v-show="show==3">
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
             <form id="form-login" method="get" action="/change">
              <div class="main">
                
                <div class="text">
                  <input type="text" class="innerBox" v-model="C_form.phone" placeholder="请输入您的手机号" name="uname" id="uname" required autofocus>
                 <div class="mt--15"></div>
                </div>

                <div class="text">
                  <input type="text" class="innerBox" v-model="C_form.email" placeholder="请输入您的邮箱" name="uname" id="uname" required autofocus >
                  <div class="mt--15"></div>
                </div>
                &nbsp;
                <br>
                <div class="text">
                 <input type="text" class="innerBox" v-model="C_form.r_code" id="password" placeholder="请输入验证码" name="code" required style="width:60%">
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
                     <a style="font-size:12px"  @click="to1">【已有账号！直接登录】</a>
                  </div>
                </div> 
                </div>
                <input class="button_login" type="submit" value="下一步" id="bt-register">
              </div>
            </form>
        </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  
  return{ 
    show:1,
    L_form:{
      phone:"",
      upwd:""
    },
    R_form:{
      email:"",
      r_code:""
    },
    C_form:{
      phone:"",
      email:"",
      r_code:""
    },

    bg:{
      backgroundImage:"url("+require("@/assets/img/common/login_bg.jpg"),
      backgroundRepeat: "no-repeat",
      backgroundPosition:"center",
      // backgroundSize: "cover"
    }
  }
},
methods:{
// 登录
  bt_login(){
    // 验证格式
    if(this.L_form.phone==""||!(/^13[234567890]\d{8}$/.test(this.L_form.phone))||this.L_form.phone.length<11){
            alert("请输入正确手机号11位");
            this.reset1()
            return
    }else if(this.L_form.upwd == '' || this.L_form.upwd.length < 6 || this.L_form.upwd.length > 16){
            alert("密码必须为字母加数字且长度6~16位");
            return
    };
        // 发送请求
          var phone= this.L_form.phone;
          var upwd = this.L_form.upwd;
          var obj = {phone,upwd};
          var url = "/login";             //可能出现参数show的问题
          this.axios.get(url,{params:{obj}}).then(result=>{
            console.log(result.data)
          })


  },


  reset1(){
    this.L_form.phone="";
    this.L_form.upwd=""
  },

  reset2(){
    this.R_form.upwd=""
    
  },

   // 画板验证码
         mycanvas(c1,callback){
            // 获得max值到最小值之间的数
            function rn(min,max){
                return  Math.floor(Math.random()*(max-min)+min);
            }
            //2.新建一个函数产生随机颜色
            function rc(min,max){
                var r=rn(min,max);
                var g=rn(min,max);
                var b=rn(min,max);
                return `rgb(${r},${g},${b})`;
            }
            //3.填充背景颜色,颜色要浅一点
            var w=100;
            var h=40;
            var ctx=c1.getContext("2d");
             ctx.fillRect(0,0,w,h);
            
            //4.随机产生字符串
            var pool="ABCDEFGHIJKLIMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz1234567890";
            var arr=[];
            var code;
            for(var i=0;i<4;i++){
                var c=pool[rn(0,pool.length-1)];//随机的字
                arr.push(c);
                var fs=rn(20,30);//字体的大小
                var deg=rn(-30,30);//字体的旋转角度
                ctx.font=fs+'px Simhei';
                ctx.textBaseline="top";
                ctx.fillStyle=rc(100,255);//字体颜色
                ctx.save();
                ctx.translate(25*i+15,15);//字所在的位置
                ctx.rotate(deg*Math.PI/180);
                ctx.fillText(c,-15+5,-10);
                ctx.restore();
            }
            code=arr.join("")
            this.r_code=code.toLowerCase()//不区分大小写
        },

         // 更新验证码
        my_code1(){
            this.mycanvas(this.$refs.can1)
        },
        my_code2(){
            this.mycanvas(this.$refs.can2)//不能存在同名节点！！
        },
      
        // 跳转
        to1(){this.show=1},
        to2(){this.show=2},
        to3(){this.show=3},

        // 登录



},
created(){
  var show1=this.$route.query.show1;
  var show2=this.$route.query.show2;
  if (show2!=null) {
    this.show=show2
  };
},

mounted(){
    this.mycanvas(this.$refs.can1);
    this.mycanvas(this.$refs.can2);

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