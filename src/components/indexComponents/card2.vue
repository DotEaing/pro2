<template>
  <div>
    <ul class="mid cl" 
   
    >
     <li v-for="(items,index) of item" 
     :key="index" 
     class="card2" 
     v-if="index<=5" 
    @mouseenter="handleIn"
    @mouseleave="handleOut"
     >
      <router-link :to="items.link">
        <span>
          <img :src="items.src" alt="汉唐风" width="344" height="344" >
        </span>
        <ins class="cl">
          <em class="e01" :style="{backgroundImage:icon1}"></em>
          <h3 class="cl inline-block">{{items.name}}</h3>
          <em class="e02" :style="{backgroundImage:icon2}"></em>
        </ins>
        <div style="display: block; top: 0px; left:388px )" :style="bg" ref="img_txt" class="img_txt">
          <img :src="items.src2" alt="汉唐风" width="344" height="344" class="img1">
        </div> 
      </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      bg:{
      backgroundImage:"url("+require("@/assets/img/common/bg6.png"),
      backgroundRepeat: "repeat",
      backgroundPosition:"center",
      backgroundSize: "cover"
    }
      

    }
  },

 methods:{
    handleIn:function(e){
         const direction =this.direction(e);
        console.log(direction);
        this.animate(direction, 'in');
    },

    handleOut:function(e){
        const direction =this.direction(e);
       console.log(direction);
       this.animate(direction, 'out');
    },
    // 判断方向
    direction:(e, type)=> {
            const clientX = e.clientX;
            const clientY = e.clientY;
            const top = e.target.offsetTop;
            const bottom = parseInt(top + e.target.offsetHeight);
            const left = e.target.offsetLeft;
            const right = parseInt(left + e.target.offsetWidth);
            const absTop = Math.abs(clientY - top);
            const absBottom = Math.abs(clientY - bottom);
            const absLeft = Math.abs(clientX - left);
            const absRight = Math.abs(clientX - right);
            const min = Math.min(absTop, absBottom, absLeft, absRight);
            let direction;
            switch (min) {
                    case absTop:
                            direction = "top";
                            break;
                    case absBottom:
                            direction = "bottom";
                            break;
                    case absLeft:
                            direction = "left";
                            break;
                    case absRight:
                            direction = "right";
                            break;
            };
            return direction;
    },
    // 操作dom
     animate: function (direction, type) {
         let top = 0,left = 0;
          if (type == 'in'){
            // this.$refs.img_txt.style.transition='none';
             if (direction == 'top') {
                        top = '-100%';
                        left = 0;
                } else if (direction == 'right') {
                        top = 0;
                        left = '100%';
                } else if (direction == 'bottom') {
                        top = '100%';
                        left = 0;
                } else if (direction == 'left') {
                        top = 0;
                        left = '-100%';
                }
                console.log(top,left);
                // this.$refs.img_txt.style.top=top;
                // this.$refs.img_txt.style.left=left;
                
                // setTimeout(() => {
                //   this.$refs.img_txt.style.transition = 'all .2s ease 0s';
                //   this.$refs.img_txt.style.top = 0;
                //   this.$refs.img_txt.style.left = 0;
                // }, 0)

                } else if (type == 'out') {
                  if (direction == 'top') {
                          top = '-100%';
                          left = 0;
                  } else if (direction == 'right') {
                          top = 0;
                          left = '100%';
                  } else if (direction == 'bottom') {
                          top = '100%';
                          left = 0;
                  } else if (direction == 'left') {
                          top = 0;
                          left = '-100%';
                  }
                  console.log(top,left);
                  // this.$refs.img_txt.style.top=top;
                  // this.$refs.img_txt.style.left=left;

           }
       }


  },
  computed:{
    ...mapState({
      icon1:state=>state.card2.icon1,
      icon2:state=>state.card2.icon2,
      item:state=>state.card2.item
  })}
}
</script>

<style scoped>

.card2{
    float: left;
    width: 32.333333%;
    margin-right: 1%;
    margin-bottom: 1%;
}

.card2 a{
    display: block;
    background: #011c27;
    position: relative;
    padding-top: 20px;
    border: 1px solid #2e3b41;
    padding-bottom: 30px;
    /* overflow: hidden; */
}

.card2 span{
    display: block;
    padding: 10px;
    margin: 10px;
    border-radius: 50%;
    border: 1px solid #8c8472;
}

.card2 span img{
    width: 100%;
    height: auto;
    border-radius: 50%;
}

.card2 ins {
    display: block;
    text-decoration: none;
    font-size: 30px;
    font-family: simsun;
    color: #dfcca1;
    text-align: center;
    margin-top: 35px;
    line-height: 50px;
    height: 50px;
}


.card2 ins em {
    display: block;
    float: left;
    width: 29px;
    height: 34px;
    margin-top: 8px
}

.card2 ins em.e02 {
    float: right;
 }

</style>

<style>
.card2  .img_txt {
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;

}

.card2 .img_txt .img1 {
    max-width: 300px;
    height: auto;
    margin-top: 17%;
}

</style>