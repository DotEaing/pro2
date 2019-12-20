import form from "@/assets/js/axios"
const state= {
  img_folder:{
    k_img:"panxz_k_img",
    y_img:"panxz_y_img",
    n_img:"panxz_n_img"
  },
  
  // card
  client:[ ],

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
  new_swiperSlides: [ ]
 
};
const getters={
  // 去重
  delReset:(state)=>{
    // let res = new Map();
    // console.log(res)
    // return  state.new_swiperSlides.filter((a) => !res.has(a.name) && res.set(a.name,state.new_swiperSlides.name)),console.log(state.new_swiperSlides)
    var obj = {};
     state.new_swiperSlides=state.new_swiperSlides.reduce((item, next)=>{
                  var a=JSON.stringify(state.new_swiperSlides)
                  console.log('item',item)
                  console.log('next',next);
                  next=JSON.stringify(next)
                  console.log('====================================');
                  console.log(a);
                  console.log('====================================');
                  // obj[next.name] ? '' : obj[next.name] = true && item.push(next);
                  return item;
            }, []),
            
            console.log(state.new_swiperSlides);
  },

};
const mutations= {
 
  
};
const actions={

async get_k_Img(context,url){
  console.log(url)
  var a = await new Promise((resolve,reject)=>{
    // 获取图片地址
    form.img(url,context.state.img_folder.k_img,res=>{
       resolve(res.data)
    })
  })
   await new Promise ((resolve)=>{ 
    // 遍历数据中需要的数据
    for (const t of a) {
      // 构建对象
        var obj ={name:t.name,src:require(`../../../../serve/${t.src}`),link:`${t.link}`}
      // 拼接到item末尾
      context.state.client.push(obj)

    }
  }) 
},

async get_n_Img(context,url){
  console.log(url)
  var a = await new Promise((resolve,reject)=>{
    // 获取图片地址
    form.img(url,context.state.img_folder.n_img,res=>{
       resolve(res.data)
    })
  })
   await new Promise ((resolve)=>{ 
    // 遍历数据中需要的数据
    for (const t of a) {
      // 构建对象
        var obj ={name:t.name,src:require(`../../../../serve/${t.src}`),link:`${t.link}`}
      // 拼接到item末尾
      context.state.new_swiperSlides.push(obj)
    }
  }) 
}




};

export default {
state,
getters,
mutations,
actions
};