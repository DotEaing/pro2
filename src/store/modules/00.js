// 字符验证
ch_phone(state){
  (state.form.phone==""||!(/^13[2-90]\d{8}$/.test(state.form.phone))||state.form.phone.length<11)?()=>0:()=>1
},
ch_upwd(state){
  (state.form.upwd == '' || state.form.upwd.length < 6 || state.form.upwd.length > 16)?()=>0:()=>1
},
ch_email(state){
  (state.form.email == '' ||!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.com$/.test(state.form.phone)))?()=>0:()=>1
  
},
ch_code(state){
  (state.form.r_code == ''||state.form.r_code!=state.form.code)?()=>0:()=>1
},

// axios实现连接

};


const actions={
myclear(context){
  context.commit("reset")
},

async bt_login(context){
  try{
    var a = await context.commit("ch_phone");
    var b = await a==1?context.commit("ch_upwd"):()=>{alert("账号输入有误");throw(err)} ;
    var c = await b==1?alert("输入正确！"):()=>{alert("密码输入有误");throw(err)};
  }catch(err){
    alert("登录失败！")
  }

}



// 字符验证
ch_phone(state){
  if (state.form.phone==""||!(/^13[2-90]\d{8}$/.test(state.form.phone))||state.form.phone.length<11){
    alert("请输入正确手机号11位");
    return 0;
  }else{
    alert("输入正确");
    return 1;
  }
},
ch_upwd(state){
  if(state.form.upwd == '' || state.form.upwd.length < 6 || state.form.upwd.length > 16){
    alert("密码必须为字母加数字且长度6~16位");
    return 0;
  }else{
    return 1;
  }
},
ch_email(state){
  if(state.form.email == '' ||!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.com$/.test(state.form.phone))){
    alert("邮箱格式不正确！"); 
    return 0;
  }
},
ch_code(state){
  if(state.form.r_code == ''||state.form.r_code!=state.form.code){
    alert("验证码错误!");
    return 0;
  }
},

// axios实现连接

};


const actions={
myclear(context){
  context.commit("reset")
},

async bt_login(context){
    var a = await context.commit("ch_phone");
    var b = await a==1?context.commit("ch_upwd"):()=>{alert("失败1")};
    await b==1?alert("输入正确！"):()=>{alert("失败2")};
}
 