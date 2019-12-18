import form from "@/assets/js/axios"
const state= {
  img_folder:{
    k_img:"panxz_k_img"
  },
  itme:[
    {name:"一寸心",src:require("../../../../serve/public/k_img/01/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/02/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/03/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/04/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/05/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/06/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/07/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/08/(1).jpg"),link:"#"},
    ]
 
};
const getters={

};
const mutations= {


};
const actions={
async getImg(context){
  var a = await new Promise((resolve,reject)=>{
    // 获取图片地址
    form.img("/card",context.state.img_folder.k_img,res=>{
      for(var a of res.data ){
        console.log(a.src)

      }
    })

  })
}

// 将遍历到的数据中需要的数据取出

// 拼接字符串

// 添加到item末尾

};

export default {
state,
getters,
mutations,
actions
};