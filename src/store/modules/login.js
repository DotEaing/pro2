import form from "@/assets/js/axios"
import axios from "axios"
import routes from "@/router/index.js"

const state= {
  form:{
    phone:"",
    upwd:"",
    check_upwd:"",
    email:"",
    user_name:"",
    gender:"",
    r_code:"",
    code:"",
  },
  bg:{
    backgroundImage:"url("+require("@/assets/img/common/login_bg.jpg"),
    backgroundRepeat: "no-repeat",
    backgroundPosition:"center",
    // backgroundSize: "cover"
  }
};

const getters={

};

const mutations= {
  // 清空表单
  reset(state){
    state.form.phone="";
    state.form.upwd="";
    state.form.email="";
    state.form.check_upw="";
    state.form.uname="";
    state.form.gender="";
    state.form.r_code="";
    state.form.code="";
  },

 // 字符验证
 ch_phone(state){
  if (state.form.phone==""||!(/^13[2-90]\d{8}$/.test(state.form.phone))||state.form.phone.length<11){
    throw new Error("phone")
  }
},
ch_upwd(state){
  if(state.form.upwd == '' || state.form.upwd.length < 6 || state.form.upwd.length > 16){
    throw new Error("upwd")
  }
},
ch_email(state){
  if(state.form.email == '' ||!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.com$/.test(state.form.email))){
    throw new Error("email")
  }
},
ch_code(state){
  if(state.form.r_code == ''||state.form.r_code!=state.form.code){
    throw new Error("code")
  }
},
ch_check_upwd(state){
  if(state.form.check_upwd==""||state.form.upwd!=state.form.check_upwd){
    throw new Error("check_upwd")
  }
},
ch_user_name(state){
  if (state.form.user_name==""||state.form.user_name.length>6||!(/^[\u4e00-\u9fa5]|[a-zA-Z]|[0-9]$/.test(state.form.user_name))) {
    throw new Error("user_name")
  }
},
ch_gender(state){
  if (state.form.gender=="") {
    throw new Error("gender")
  }
}
};


const actions={
  // 清空表单
myclear(context){
  context.commit("reset")
},
// 这里写成异步使用es7的async,先验证字符格式，再调用执行axios请求
  // 登录
async bt_login(context){
  try{
    var a= await new Promise((resolve)=>{
      context.commit("ch_phone")
      resolve("号码格式正确")
    });
    var b =await new Promise((resolve)=>{
      console.log(a)
      context.commit("ch_upwd")
      resolve("密码格式正确")
    });
    var c=await new Promise((resolve)=>{
      console.log(b)
      // 外联js文件axios实现连接
      form.login("login",context.state.form,res=>{
        resolve(res.data);
      })
    })
    await console.log(c)
  }catch(e){
    if (e.message=="phone") {
      alert("请输入正确手机号11位");
      return
    }else if(e.message=="upwd"){
      alert("密码必须为字母加数字且长度6~16位");
      return
    }
  }
},

  // 提交邮箱
  async bt_next(context){
    try{
      var a= await new Promise((resolve)=>{
        context.commit("ch_email")
        resolve("邮箱格式正确")
      });
      var b =await new Promise((resolve)=>{
        console.log(a)
        context.commit("ch_code")
        resolve("验证码正确")
      });
        await  console.log(b)
    }catch(e){
      if (e.message=="email") {
        alert("请输入正确邮箱");
          return
      }else if(e.message=="code"){
        alert("验证码错误");
          return
      }
    }
  },
  

  // 完善信息注册
  async  bt_register(context) {
    try{
    var a= await new Promise((resolve)=>{
      context.commit("ch_user_name")
      resolve("昵称可用")
    });
    var  c=await new Promise((resolve)=>{
      console.log(a)
      context.commit("ch_gender")
      resolve("性别已填写")
    });
    var d =await new Promise((resolve)=>{
      console.log(c)
      context.commit("ch_phone")
      resolve("手机号可用")
    });
    var  e=await new Promise((resolve)=>{
      console.log(d)
      context.commit("ch_upwd")
      resolve("密码格式正确")
    });
    var f =await new Promise((resolve)=>{
      console.log(e)
      context.commit("ch_check_upwd")
      resolve("重复密码正确")
    });
    var g=await new Promise((resolve)=>{
      console.log("成功")
      // // 外联js文件axios实现注册
      // form.register("userInfor",context.state.form,res=>{
      //   resolve(res.data);
      // })
    })
    await console.log(g)
  }catch(e){
    switch (e.message) {
      case "user_name":
        alert("请输入正确的昵称");
          break;
      case "gender":
        alert("请填入性别");
          break;
      case "upwd":
        alert("请输入正确的密码");
          break;
      case "phone":
        alert("请输入正确的电话");
          break;
      case "check_upwd":
        alert("请输入正确的密码");
          break;
  }
  }
},


  // 修改密码
};

export default {
state,
getters,
mutations,
actions
};