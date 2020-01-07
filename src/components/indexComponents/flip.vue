<template>
  <div>
    <div class="fanye cl">
          <p class="lf l" @click="tt">
            <em class="fa fa-chevron-left" aria-hidden="true"></em>
            <a >舞袖</a>
          </p>    
          <p class="rf r">
            <a >妲己</a>
            <em class="fa fa-chevron-right" aria-hidden="true"></em>
          </p>
      </div>
  </div>
</template>

<script>
export default {
props:["con"],
  methods:{
    tt(){
      console.log(this.con.head_img,this.con.name);
    }
  },

  created(){
        /** 查找此组上一组和下一组的名字（要写服务器代码 ），
         * 如果查找为空按钮消失，如果不为空则赋值名字为按钮的 value ，
         * 点击出现跳转事件，同 card的 点击事件
         * */ 
  }

}
</script>

<style scoped>
 .fanye p {
    border: 1px solid #404f4a;
    line-height: 40px;
    width: 49%;
}
.fanye p:hover{
  /* border: 1px solid red; */
  background: #313e39;
  /* opacity:.3; */
}


.fanye p em {
    width: 50px;
    line-height: 40px;
    color: #dfcca1;
    text-align: center;
    margin-right: 20px;
    border-right: 1px solid #404f4a;
    display: inline-block;
    z-index: 999;
}

.fanye p.r {
    text-align: right;
}

.fanye p a {
    color: #dfcca1;
    font-size: 14px;
    z-index: 999;
}

 .fanye p.r em {
    margin-left: 20px;
    margin-right: 0;
    border-left: 1px solid #404f4a;
    border-right: none;
    display: inline-block
}



</style>