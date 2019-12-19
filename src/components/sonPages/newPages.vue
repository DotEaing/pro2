<template>
  <div>
      <div class="newPages ">
        <div class="mid "> 
            <div class="activeity">
                <img src="@/assets/img/common/sonPages/new.jpg"  width="1188" height="679">
            </div>
            <div class="workplase mid">
            <!-- 修改传入子组件的对象就可以 -->
                <card3 :con="new_swiperSlides" class="cl"></card3>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions} from "vuex"
import card3 from "@/components/indexComponents/card3.vue"
export default {
data() {
  return{

  }
},

 methods:{
      ...mapActions(["getImg"]),
        
        get_img(){
          this.getImg();
        },
    },

  computed:{...mapState({
          new_swiperSlides:state=>state.card.new_swiperSlides
          })},

  created(){
      // 发送请求每一组样片的第一张
      this.get_img()
  },

components:{
        card3,
    }
}
</script>

<style scoped>
.newPages{
  background: #001a26;
}
.newPages .activeity{
  text-align: center;
}

.newPages .workplase{
  padding-top: 30px;
}

</style>