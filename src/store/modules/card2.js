
const state= {
      icon1:"url("+require("@/assets/img/common/card2/ico01.png")+")",
      icon2:"url("+require("@/assets/img/common/card2/ico02.png")+")",
      item:[
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
      }
};
const getters={

};
const mutations= {

};
const actions={

};

export default {
  state,
  getters,
  mutations,
  actions
};