<template>
  <div class="nav">
      <div class="main pos_rel">
          <div class="box mid">
              <div class="logo lf">
                  <a href="#">
                      <img src="@/assets/img/common/logo.png" alt="">
                  </a>    
              </div>
              <!-- nav -->
                  <div class="main-nav lf">
                      <ul>
                          <li v-for="(name,index) of nav" :key="index" class="lf"
                           :class="{'hoverBg':index == hoverIndex}"  
                           @mouseenter="show(index);"
                           @mouseleave=" disappear()">
                           <router-link :to="name.link" @click="reset_card()">
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
                <!-- unlogin -->
                  <div class="login">
                      <ul v-if="loginShow == null">
                        <li><router-link :to="login"><em class="fa fa-user-circle-o" aria-hidden="true"></em> 登录</router-link></li>
                        <li>|</li>
                        <li><router-link :to="register"><em class="fa fa-file-text-o" aria-hidden="true"></em> 注册</router-link></li>
                      </ul>
                  

                  <!-- login -->
                  
                      <ul v-else-if="loginShow != null">
                        <li>你好！&nbsp;{{nameData}}</li>
                        <li>|</li>
                        <li><i @click="close">退出</i></li>
                      </ul>
                  </div>
                
              </div>
          </div>
      </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            l:"",
            t:"",
            loginShow:sessionStorage.getItem("panxz_user_pc_uid"),
            nameData:sessionStorage.getItem("panxz_user_pc_uname"),
            hoverIndex:-1,
            hoverIndex2:-1, 
            login:{path:"/login",},
            register:{path:'/register',}

        }
    },
    watch:{
       
    },

         methods:{
            //  下拉列表
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
            },
        //    退出登录
        close(){
            sessionStorage.removeItem('panxz_user_pc_uid');
            sessionStorage.removeItem('panxz_user_pc_uname');
            window.history.go(0)
        }

         },
         computed:({
        ...mapState({
            nav:state=>state.nav.nav,
            s_title:state=>state.nav.nav
        }),
        ...mapMutations(["reset_card"])
    }),
    created(){
        console.log('====================================1111');
        console.log(this.loginShow);
        console.log('====================================');
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
/* .s_title-leave, .s_title-enter-to{
    opacity: 1;
} */

.nav .main{
        text-align: center;
        background: #000;
        display: flex;
        justify-content: center; 
        height: 100px; 
        z-index:9999;  
}

.nav  .main .logo{
    vertical-align: middle;
}

.nav  .main .logo>a {
    display: block;
    line-height: 100px;
}

.nav .main .logo img {
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
/* login */
.login {
    margin-left:20px ;
    float: left;
}

.login li{
    float: left;
    line-height: 99.5px;
    background-color: #000;
    color: #dfcca1;
    padding:  0 3px;
}

/* .login li:first-child a p{
    border-right:#dfcca1 solid 1px 
} */

.login li a{
    color:inherit;
    /* border: #dfcca1 solid 1px ; */
    font-size: 15px;
    padding: 3px 10px;
    cursor: pointer;
}

.login li a:hover{
    background: #001a26
}

/* unlogin */
.login li i{
    color:inherit;
    /* border: #dfcca1 solid 1px ; */
    font-size: 15px;
    padding: 3px 10px;
    cursor: pointer;
}

.login li i:hover{
    background: #001a26
}

/* 变化颜色 */
.main-nav .hoverBg{
    background:  #001a26
   
}

.main-nav .hoverBg2{
   background:  #001a26
   
}

</style>