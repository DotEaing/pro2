import form from "@/assets/js/axios"
import axios from "axios"

const state= {
  form:{
    phone:"",
    upwd:"",
    email:"",
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
    state.form.r_code=""
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
  if(state.form.email == '' ||!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.com$/.test(state.form.phone))){
    throw new Error("email")
  }
},
ch_code(state){
  if(state.form.r_code == ''||state.form.r_code!=state.form.code){
    throw new Error("code")
  }
},

};


const actions={
myclear(context){
  context.commit("reset")
},

// 这里写成异步使用es7的async,先验证字符格式，再调用执行axios请求

  // 注册
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
    }else if(e.message=="upwd"){
      alert("密码必须为字母加数字且长度6~16位");
    }
  }
}


  
 

  
  // 修改密码
};

export default {
state,
getters,
mutations,
actions
};