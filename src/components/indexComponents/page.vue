<template>
  <div>
    <div class="default-pc-page page cl">
      <a  class="page_next" @click="prve($event)">上一页</a>
      <a  class="a" 
      v-for="(item,index) of show" :key="index" :data-index="index" ref="page">{{item.value}}</a>
      <a  class="page_next" @click="next($event)">下一页</a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      page:"1",
      show:[{value:1},{value:2}]
    }

  },
   methods:{

    //  点亮页码
      // pages(){


      // },

      next: function(e){
        var obj = {value:this.show.length+1}
        this.show.push(obj)
        // var dom = e.target
        // var index = dom.getAttribute('data-index')
        // console.log(index);
        if (show.length>=5) {
          
        } 
        
      },
      prve(e){
        
      }
    }

}
</script>

<style scoped>
 .page a:hover {
    background: #dfcca1;
    color: #001a27;
}

.page a {
    display: inline-block;
    float: none;
    color: #dfcca1;
    border: 1px solid #dfcca1;
    display: block;
    float: left;
    padding: 0 12px;
    border-radius: 3px;
    margin-right: 8px;
    margin-top: 8px;
    cursor: pointer
}
</style>