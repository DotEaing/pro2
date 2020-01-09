<template>
  <div>
    <div class="clientPages">
      <div class="mid "> 
            <div class="activeity">
                <img src="@/assets/img/common/sonPages/kp_gg.png"  width="709" height="84">
            </div>
            <div class="workplase mid cl">
            <!-- 修改传入子组件的对象就可以 -->
                <card :con="client"></card> 
            </div>
        </div>
    </div>
            <div class="mid cl" >
                <page :con="client"></page>
            </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters,mapMutations} from "vuex"
import card from "@/components/indexComponents/card.vue"
import page from "@/components/indexComponents/page.vue"
export default {
data(){
  return{

  }
},

  methods:{
        ...mapActions(["get_k_Img","get_y_Img",]),
          get_k_img(url){
        this.get_k_Img(url);
      },
    },

  computed:{...mapState({
    client:state=>state.card.client,
    

    })
    },

  components:{card,page},

  created(){
    this.client==""?this.get_k_img("/home"):console.log(this.client);
    console.log('====================================');
    console.log(this.client.length);
    console.log('====================================');

  }

}
</script>

l
<style scoped>
.clientPages{
  background: #001a26;
}
.clientPages .activeity{
  text-align: center;
  padding: 100px 0;
}
.clientPages .workplase{
  padding-top: 30px;
}

.card em{
	background:#001a26 !important;
}


</style>