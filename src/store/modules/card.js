import form from "@/assets/js/axios"
const state= {
  img_folder:{
    k_img:"panxz_k_img",
    y_img:"panxz_y_img",
    n_img:"panxz_n_img"
  },
  
  // card1
  client:[
    {name:"一寸心",src:require("../../../../serve/public/k_img/01/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/02/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/03/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/04/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/05/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/06/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/07/(1).jpg"),link:"#"},
    {name:"一寸心",src:require("../../../../serve/public/k_img/08/(1).jpg"),link:"#"},
    ],

// card2
  icon1:"url("+require("@/assets/img/common/card2/ico01.png")+")",
  icon2:"url("+require("@/assets/img/common/card2/ico02.png")+")",
  original:[
    {name:"汉唐风",src:require("@/assets/img/common/card2/ht.jpg"),link:"#",src2:require("@/assets/img/common/card2/ht_txt.png")},
    {name:"江南风",src:require("@/assets/img/common/card2/jn.jpg"),link:"#",src2:require("@/assets/img/common/card2/jn_txt.png")},
    {name:"仙侠风",src:require("@/assets/img/common/card2/xx.jpg"),link:"#",src2:require("@/assets/img/common/card2/xx_txt.png")},
    {name:"戏曲风",src:require("@/assets/img/common/card2/xq.jpg"),link:"#",src2:require("@/assets/img/common/card2/xq_txt.png")},
    {name:"影视风",src:require("@/assets/img/common/card2/ys.jpg"),link:"#",src2:require("@/assets/img/common/card2/ys_txt.png")},
    {name:"中国风",src:require("@/assets/img/common/card2/zg.jpg"),link:"#",src2:require("@/assets/img/common/card2/zg_txt.png")}
  ],

  bg:{
    backgroundImage:"url("+require("@/assets/img/common/bg6.png"),
    backgroundRepeat: "repeat",
    backgroundPosition:"center",
    backgroundSize: "cover"
  },

  // card3
  new_swiperSlides: [
    {name:"快意江湖",link:"#",src:require("@/assets/img/sm_carouserl/1.jpg")},
    {name:"快意江湖",link:"#",src:require("@/assets/img/sm_carouserl/2.jpg")},
    {name:"快意江湖",link:"#",src:require("@/assets/img/sm_carouserl/3.jpg")},
    {name:"快意江湖",link:"#",src:require("@/assets/img/sm_carouserl/4.jpg")}, 
    {name:"快意江湖",link:"#",src:require("@/assets/img/sm_carouserl/5.jpg")},
    {name:"快意江湖",link:"#",src:require("@/assets/img/sm_carouserl/6.jpg")},
    {name:"快意江湖",link:"#",src:require("@/assets/img/sm_carouserl/7.jpg")},
    {name:"快意江湖",link:"#",src:require("@/assets/img/sm_carouserl/8.jpg")}
  ]
 
};
const getters={

};
const mutations= {
  

};
const actions={
  
async get_k_Img(context,url){
  console.log(url)
  var a = await new Promise((resolve,reject)=>{
    // 获取图片地址
    form.img(url,context.state.img_folder.k_img,res=>{
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