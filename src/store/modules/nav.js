
const state= {
  nav:[
      {title:"首页",link:"#"},
      {title:"原创风格",link:"#",s_title:[ {name:"汉唐风",link:"#"}, {name:"江南风",link:"#"}, {name:"戏曲风",link:"#"}, {name:"仙侠风",link:"#"}, {name:"印巴风",link:"#"}, {name:"民族风",link:"#"}],},
      {title:"最新活动",link:"#"},
      {title:"最新发布",link:"#"},
      {title:"最新客片",link:"#"},
      {title:"新闻资讯",link:"#"},
      {title:"品牌文化",link:"#"} 
    ],        
};
const getters={

};
const mutations= {
  toTop(){
    // 位移三要素
    // 1.总距离
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    // 2.总时间
    var time=800
    // 3.总步数
    var steps=80
    // 每一步距离
    var step=scrollTop/steps;
    // 每一步时间
    var intervals=time/steps;
    // 设置定时器

    var timer=setInterval(()=>{
        // 每一步减少的距离
        window.scrollBy(0,-step);
        // 移动一次总步数减少1
        steps--;
        // 设置停止
        if (steps==0){
            // 停止定时器
            clearInterval(timer)
        }
    },intervals)
  }
};
const actions={

};

export default {
  state,
  getters,
  mutations,
  actions
};