<template>
  <div>
    <div>
    <ul class="mid cl ">
     <li v-for="(items,index) of item" 
     :key="index" 
     :data-index="index"      
     class="card2 pos_rel" 
     v-if="index<=5" 
    @mouseenter="handleIn($event)"
    @mouseleave="handleOut($event)"
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
        <div :style="bg" ref="imgTxt" class="imgTxt">
          <img :src="items.src2" alt="汉唐风" width="344" height="344" class="img1">
        </div> 
      </router-link>
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
 
    }
  },

 methods:{

    handleIn:
         function(e){
          var dom = e.target
          var index = dom.getAttribute('data-index')  //解决的一个大坑：事件委托,绑定自定义属性查询下标
          const direction =this.direction(e);
          // console.log(direction);
          this.animate(direction, index,'in');
        },

    handleOut:
        function(e){
          var dom = e.target
          var index = dom.getAttribute('data-index')
          const direction =this.direction(e);
      //  console.log(direction);
          this.animate(direction,index,'out');
    },
    // 判断方向
    direction:
        function(e, type){
            // console.log(e)
            var w = e.target.offsetWidth;
            var h = e.target.offsetHeight;
            var x = (e.pageX - e.target.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
            var y = (e.pageY - e.target.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
            var min=Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
            // min值为"0,1,2,3"分别对应着"上，右，下，左"
            // console.log('====================================');
            // console.log(min,w,h,x,y);
            // console.log('====================================');
            let direction;
            switch (min) {
                    case 0:
                            direction = "top";
                            break;
                    case 2:
                            direction = "bottom";
                            break;
                    case 3:
                            direction = "left";
                            break;
                    case 1:
                            direction = "right";
                            break;
            };
            return direction;
    },
    // 操作dom
     animate: function (direction,index,type) {
        // var a=direction.getAttribute('data-index')
         let top = 0,left = 0;
         let aa=this.$refs.imgTxt[index].style; //操作图片的dom
        //  console.log(aa);
              
          if (type == 'in'){
            // aa.transition='none';
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
                // console.log(top,left);
               aa.top=top;
               aa.left=left;

              
              setTimeout(() => {
                aa.transition = 'all .5s ease 0s';
                aa.top = 0;
                aa.left = 0;
              }, 0)
                
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
                // console.log(top,left);
                aa.top=top;
                aa.left=left;

           }
       }


  },
  computed:{
    ...mapState({
      icon1:state=>state.card.icon1,
      icon2:state=>state.card.icon2,
      item:state=>state.card.original,
      bg:state=>state.card.bg,
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
    overflow: hidden;
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
.card2  .imgTxt {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;

}

.card2 .imgTxt .img1 {
    max-width: 300px;
    height: auto;
    margin-top: 17%;
}

</style>