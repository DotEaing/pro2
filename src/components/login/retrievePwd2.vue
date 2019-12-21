<template>
  <div>
    <div class="login_box" :style="bg">
        <div class=" mid pos_rel">
          <div class="login_body rf pos_abs">

            <div class="title  flex">
            <div class="logo">
               <img src="@/assets/img/common/logo.png" alt="" class="">
            </div>
                 <span class="name">
                  修改密码
                 </span>
           </div>
           <hr>
           <br>

              <div class="main">
                
                <div class="text">
                  <input type="text" class="innerBox" v-model="form.upwd" placeholder="请输入旧密码" name="upwd" required autofocus>
                 <div class="mt--15"></div>
                </div>
                 &nbsp;
                <br>

                <div class="text">
                  <input type="password" class="innerBox" v-model="form.new_upwd" placeholder="请输入新密码" name="new_upwd"  required autofocus >
                  <div class="mt--15"></div>
                </div>
                &nbsp;
                <br>

                <input class="button_login" type="button" value="修改" id="bt-register" @click="update_upwd()">
              </div>
          </div>
          </div>
          </div>
  </div>
</template>

<script>
import "@/assets/css/login.css"
import my_can from "@/assets/js/my_can"
import {mapState,mapActions } from 'vuex'
export default {
  data(){
    return{

    }
  },
  methods:{
 ...mapActions(["myclear","update_upwd"]),

  // 清空表单
  reset(){
    this.myclear();   // 同this.$store.commit("reset");
  },


  },

  computed:{
  ...mapState({
    form:state=>state.login.form,
    bg:state=>state.login.bg,
  })
},
created(){
  this.form.phone=this.$route.query.phone;
  this.form.email=this.$route.query.email;
  console.log(this.form)
}
  

}
</script>

<style scoped>


</style>