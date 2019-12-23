<template>
  <div>
    <div class="originalPages">
      <!-- 大图 -->
      <div class="originalPages_header wp" >
          <div>
              <img src="@/assets/img/o_img/ht.jpg" alt="" srcset="" width="100%">
          </div>
      </div>

        <div class="mid">
          <!-- logo -->
          <div class="activeity">
              <div class="og_logo">
                <img src="@/assets/img/o_img/ht_logo.png"  width="374" height="453">
              </div>
            <div class="mid--1000 ">
              <h2 style="text-align: center" class="">
                <!-- 标题 -->
              <div class="stylebg cl">
                    <span class="">
                      <img src="@/assets/img/common/sonPages/leftbg.png" alt="" srcset="" style="width:100%">
                    </span>
                    <span class="s02 " style="float:right">
                      <img src="@/assets/img/common/sonPages/rightbg.png" alt="" srcset="" style="width:100%">
                    </span>
                    <div class="cl">
                        <img src="@/assets/img/common/sonPages/new_2.png" alt="" srcset="" >
                    </div>
              </div>
              </h2>

            </div>
          </div>

          <div class="workplase mid cl">
            <!-- og_con是指vuex表单中的导入的原创风格表单 -->
            <!-- <card :con=""></card>   -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
      return{

      }
    }
}
</script>

<style scoped>
.originalPages{
  background: #001a26;
}
.originalPages_header {
      padding-top: 0;
}
.originalPages_header div{
  text-align: center;
}
.originalPages_header div img{
    width: 100%;
    height: auto;
}

.originalPages .activeity{
  text-align: center;
    margin: 50px 0;

}


.newPages .workplase{
  padding-top: 30px;
}

.stylebg {
    position: relative;
}
.stylebg span {
    display: block;
    height: 137px;
    float: left;
    width: 50%;
   
}

.og_logo{
    text-align: center;
    margin: 50px 0;
}

.stylebg div {
    position: absolute;
    top: 20px;
    width: 100%;
    height:100%;
    
}

</style>