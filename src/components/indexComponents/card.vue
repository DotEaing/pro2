<template>
  <div>
   
      <div class="card" v-for="(itmes,index) of con" :key="index">
       
        <router-link :to="itmes.link">
          <span>
          <!-- img -->
            <ins class="c_img">
              <img :src="itmes.src" alt="">
            </ins>
              <em class="e01"></em>
              <em class="e02"></em>
              <em class="e03"></em>
              <em class="e04"></em>
            </span>
            <!-- name -->
            <div class="c_name">
              <h3 class="s">{{itmes.name}}</h3>
              <em class="e01"></em>
              <em class="e02"></em>
              <em class="e03"></em>
              <em class="e04"></em>
            </div>
        </router-link>

      </div>
  
  </div>
</template>

<script>
// import {mapState,mapActions,mapGetters,mapMutations} from "vuex"
export default {
  props:["con"],
    data(){
        return{
        }
    },
    //  methods:{
    //     ...mapActions(["get_k_Img"]),
    //     get_img(url){ this.get_k_Img(url);},
    // },
    // computed:{
    //     ...mapState({client:state=>state.card.client})

    // },
    //   mounted(){
    //    this.client==""?this.get_img("/home"):console.log(this.client);

    // }
}
</script>

<style scoped>

.card{
    float: left;
    width: 24%;
    margin-right: 1%;
    margin-bottom: 45px;
    
}

.card a {
    display: block;
}

.card span {
    display: block;
    position: relative;
    background: #000;
    overflow: hidden;
    height: 435px;
}

.card img {
  width: 100%;
    height: auto;
     border: 1px solid #444f51;
     transition: all .3s;
  
}

/* css3 滤镜 */
.card img:hover{
  -webkit-filter: brightness(0.8);
  filter: brightness(0.8);
}

.card em{
	display:block;
	position:absolute;
	width:6px;
	height:6px;
	background:#000;
}

.card a .e01{
	border-right:1px solid #444f51;
	border-bottom:1px solid #444f51;
	border-left:1px solid #000;
	border-top:1px solid #000;
	top:-1px;
	left:-1px;
}

.card a .e02{
	border-left:1px solid #444f51;
	border-bottom:1px solid #444f51;
	border-right:1px solid #000;
	border-top:1px solid #000;
	top:-1px;
	right:-1px;
}

.card a .e03{
	border-right:1px solid #444f51;
	border-top:1px solid #444f51;
	border-left:1px solid #000;
	border-bottom:1px solid #000;
	bottom:-1px;
	left:-1px;
}

.card a .e04{
	border-left:1px solid #444f51;
	border-top:1px solid #444f51;
	border-right:1px solid #000;
	border-bottom:1px solid #000;
	bottom:-1px;
	right:-1px;
}

.card .c_name {
    position: relative;
    height: 75px;
    line-height: 75px;
    border: 1px solid #444f51;
    margin-top: 5px;
}

.card .c_name h3 {
    text-align: center;
    font-size: 17px;
    color: #dfcca1;
    padding: 0 20px;
}



.s {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
}

.card .c_name h3:hover{
   color: #000;
   background-color: #dfcca1

}


</style>