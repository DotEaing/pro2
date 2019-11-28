<template>
  <div id="nav">
      <div class="main pos_rel">
          <div class="box mid">
              <div class="logo lf">
                  <a href="#">
                      <img src="@/assets/img/common/logo.png" alt="">
                  </a>    
              </div>
                  <div class="main-nav lf">
                      <ul>
                          <li v-for="(name,index) of nav" :key="index" class="lf"
                           :class="{'hoverBg':index == hoverIndex}"  
                           @mouseenter="show(index);"
                           @mouseleave=" disappear()">
                           <router-link :to="name.link" >
                               {{name.title}}
                           </router-link>
                            <transition name="s_title">
                               <ul v-if="index==t">
                                   <li v-for="(item,indexs) of name.s_title" :key="indexs"
                                   class="s_title "
                                   :class="{'hoverBg2':indexs == hoverIndex2}"
                                     @mouseenter="show2(indexs)"
                                     @mouseleave="disappear2()"
                                   >
                                       <router-link :to="item.link">
                                           {{item.name}}
                                       </router-link>
                                   </li>
                               </ul>
                            </transition>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    data(){
        return {
            l:"",
            t:"",
            hoverIndex:-1,
            hoverIndex2:-1,
            nav:[
                {title:"首页",link:"#"},
                {title:"原创风格",link:"#",s_title:[ {name:"汉唐风",link:"#"}, {name:"江南风",link:"#"}, {name:"戏曲风",link:"#"}, {name:"仙侠风",link:"#"}, {name:"印巴风",link:"#"}, {name:"民族风",link:"#"}],},
                {title:"最新活动",link:"#"},
                {title:"最新发布",link:"#"},
                {title:"最新客片",link:"#"},
                {title:"新闻资讯",link:"#"},
                {title:"品牌文化",link:"#"}
                ],        
        }
    },
         methods:{
             show(index){
                     this.t=index;
                     this.hoverIndex=index;
                 },
            disappear(){
                this.t=-1;
                this.hoverIndex=-1
            },

            show2(indexs){
                     this.l=indexs;
                     this.hoverIndex2=indexs;
                 },
            disappear2(){
                this.l=-1;
                this.hoverIndex2=-1
            }
         }
}
</script>

<style scoped>
/* 动画 */
.s_title-enter-active, .s_title-leave-active{
    transition: opacity   
}

.s_title-enter, .s_title-leave-to{
    opacity: 0;
}
.s_title-leave, .s_title-enter-to{
    opacity: 1;
}

.main{
        text-align: center;
        background: #000;
        
        display: flex;
        justify-content: center; 
        height: 100px; 
        z-index:9999;      
}

.main .logo{
    vertical-align: middle;
}

.main .logo>a {
    display: block;
    line-height: 100px;
}

.main .logo img {
    max-height: 100px;
    margin-right: 20px;
}


.main-nav li{
line-height: 100px;
background-color: #000

}

.main-nav li a {
    display: block;
   
    font-size: 15px;
    padding: 0 25px;
    color: #dfcca1;
}

.main-nav .s_title{
    padding: 0;
    margin: 0;
    line-height: 50px;
    height: 50px;
    width: 100%;
    background-color: #000
}



/* 变化颜色 */
.main-nav .hoverBg{
    background:  #001a26
   
}

.main-nav .hoverBg2{
   background:  #001a26
   
}

</style>