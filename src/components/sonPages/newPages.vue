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
import {mapState,mapActions,mapGetters,mapMutations} from "vuex"
import card3 from "@/components/indexComponents/card3.vue"
export default {
data() {
  return{

  }
},

 methods:{
      ...mapActions(["get_n_Img"]),
        get_n_img(url){
          this.get_n_Img(url);
        },
    },

  computed:{...mapState({new_swiperSlides:state=>state.card.new_swiperSlides})},

  components:{card3},

  mounted(){
     this.new_swiperSlides==""?this.get_n_img("/home"):console.log(this.new_swiperSlides);
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