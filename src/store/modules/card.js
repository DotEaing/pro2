import form from "@/assets/js/axios"
const state= {
  img_folder:{
    k_img:"panxz_k_img",
    y_img:"panxz_y_img",
    n_img:"panxz_n_img",
    o_img:"panxz_o_img",
  },
  
  // card
  client:[],

// card2
original_face:[
  {name:"汉唐风",src:require("@/assets/img/common/card2/ht.jpg"),link:"/originalPages/panxz_o_img/ht",src2:require("@/assets/img/common/card2/ht_txt.png")},
  {name:"江南风",src:require("@/assets/img/common/card2/jn.jpg"),link:"/originalPages/panxz_o_img/jn",src2:require("@/assets/img/common/card2/jn_txt.png")},
  {name:"仙侠风",src:require("@/assets/img/common/card2/xx.jpg"),link:"/originalPages/panxz_o_img/xx",src2:require("@/assets/img/common/card2/xx_txt.png")},
  {name:"戏曲风",src:require("@/assets/img/common/card2/xq.jpg"),link:"/originalPages/panxz_o_img/xq",src2:require("@/assets/img/common/card2/xq_txt.png")},
  {name:"影视风",src:require("@/assets/img/common/card2/ys.jpg"),link:"/originalPages/panxz_o_img/ys",src2:require("@/assets/img/common/card2/ys_txt.png")},
  {name:"中国风",src:require("@/assets/img/common/card2/zg.jpg"),link:"/originalPages/panxz_o_img/zg",src2:require("@/assets/img/common/card2/zg_txt.png")}
  ],
  icon1:"url("+require("@/assets/img/common/card2/ico01.png")+")",
  icon2:"url("+require("@/assets/img/common/card2/ico02.png")+")",
  bg:{
    backgroundImage:"url("+require("@/assets/img/common/bg6.png"),
    backgroundRepeat: "repeat",
    backgroundPosition:"center",
    backgroundSize: "cover"
  },

  // card3
  new_swiperSlides:[],

  //  original
  ogCommon:[],

  original:[],

  // single
  single:[]
 
};
const getters={
}

const mutations= {
  reset_card(state){
    state.client=[];
    state.new_swiperSlides=[];
    // state.original=[]
    state.single=[]
    state.ogCommon=[]
  },
  
  sil_toObj(state){
  
    state.single=JSON.parse(JSON.stringify(state.single)) 
  }

};


const actions={

// =====================================
// 客片首张
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
        var obj ={name:t.name,src:require(`../../../../serve/${t.src}`),link:`/singlePages/k/${t.name}`}
      
      // 拼接到item末尾
      context.state.client.push(obj)
      
    }
  }) 
},

// 客片单组
async get_single_k_Img(context,obj){
  console.log(obj)
  var a = await new Promise((resolve,reject)=>{
    // 获取图片地址
    form.allImg(obj.url,obj.name,context.state.img_folder.k_img,res=>{
      resolve(res.data)
    })
  })
   await new Promise ((resolve)=>{ 
    // 遍历数据中需要的数据
    for (const t of a) {
      // 构建对象
        var obj ={name:t.name,src:require(`../../../../serve/${t.src}`),link:`${t.link}`}
        // 拼接到item末尾
      context.state.single.push(obj)
    }
  }) 
},


// ==============================================================
// 新片首张
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
      var obj ={name:t.name,src:require(`../../../../serve/${t.src}`),link:`/singlePages/n/${t.name}`}
      // 拼接到item末尾
      context.state.new_swiperSlides.push(obj)
    }
  }) 
},

// 新片单组
async get_single_n_Img(context,obj){
  console.log(obj)
  var a = await new Promise((resolve,reject)=>{
    // 获取图片地址
    form.allImg(obj.url,obj.name,context.state.img_folder.n_img,res=>{
      resolve(res.data)
    })
  })
   await new Promise ((resolve)=>{ 
    // 遍历数据中需要的数据
    for (const t of a) {
      // 构建对象
        var obj ={name:t.name,src:require(`../../../../serve/${t.src}`),link:`${t.link}`}
      // 拼接到item末尾
      context.state.single.push(obj)

    }
  }) 
},


// ==============================================================
// 原创片标题
async get_o_head_Img(context,obj){
  var a= await new Promise((resolve)=>{
    console.log(obj);
    form.allImg(obj.url,obj.name,context.state.img_folder.o_img,res=>{
      resolve(res.data)
    })
  }) 
  var b=await new Promise ((resolve)=>{ 
    // // 遍历数据中需要的数据
    console.log(a)
    for (const t of a) {
      // 构建对象
      console.log(t)

        var obj ={name:t.name,headSrc:require(`../../../../serve/${t.head_src}`),logoSrc:require(`../../../../serve/${t.logo_src}`),link:`${t.link}`}
      // 拼接到item末尾
      context.state.ogCommon.push(obj)
      resolve(context.state.ogCommon)
    }
  })
    // context.state.ogCommon=a
    // console.log(a)
},

// =================================================================

// 样片首张
async get_y_Img(context,url){
  console.log(url)
  var a = await new Promise((resolve,reject)=>{
    // 获取图片地址
    form.img(url,context.state.img_folder.y_img,res=>{
       resolve(res.data)
    })
  })
   await new Promise ((resolve)=>{ 
    // 遍历数据中需要的数据
    for (const t of a) {
      // 构建对象
      var obj ={name:t.name,src:require(`../../../../serve/${t.src}`),link:`/singlePages/y/${t.name}`}
      // 拼接到item末尾
      context.state.original.push(obj)

    }
  }) 
},

// 样片单组
async get_single_y_Img(context,obj){
  console.log(obj)
  var a = await new Promise((resolve,reject)=>{
    // 获取图片地址
    form.allImg(obj.url,obj.name,context.state.img_folder.y_img,res=>{
      resolve(res.data)
    })
  })
   await new Promise ((resolve)=>{ 
    // 遍历数据中需要的数据
    for (const t of a) {
      // 构建对象
        var obj ={name:t.name,src:require(`../../../../serve/${t.src}`),link:`${t.link}`}
      // 拼接到item末尾
      context.state.single.push(obj)

    }
  }) 
},

// ==========================================================

};

export default {
state,
getters,
mutations,
actions
};