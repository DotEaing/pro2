<template>
  <div>
    <div class="mid">

    <div class="default-pc-page page cl mid">
      <a  class="page_next" @click="prve($event)">上一页</a>
      <div>
        <a  class="a" v-for="(item,index) of show" :key="index" @click="light_page($event)" :data-index="index" ref="page">{{item.value}}</a>
      </div>
      <a  class="page_next" @click="next($event)">下一页</a>
    </div>
  </div>
    </div>
</template>

<script>
import form from "@/assets/js/axios"
export default {
 props:["con"],
  data(){
    return{
      // 当前页数
      page:1,
      // 总页数
      pon:"",
      show:[],
      // length:"111"
    }

  },

  watch:{
    page(){
      // this.light_page(e)
    }
  },
  
   methods:{
    //  子向父传值

  

    //  查询数据库不可取(减少http请求)
    //  遍历页数
      // async pons(){
      //   var a = await new Promise((resolve,rejcet)=>{
      //     var url = "/page"
      //     var img_folder = `panxz_k_img`   //由父页面给定查询的传值确定遍历的文件夹
      //     form.img(url,img_folder,res=>{
      //       resolve(res.data)
      //     })
      //   })
      //   var b = await new Promise((resolve,rejcet)=>{
      //     var tt = Math.ceil(a.length/8);
      //     resolve(tt)
      //   })
      //   await new Promise((resolve)=>{
      //      for(var sum=0;sum<b;sum++){
      //       var obj = {value:sum+1}
      //         this.show.push(obj)
      //       }
      //   })
      // },

      // 利用已获得的数据判断用多少数据
      
      //  遍历页数
      pons: function () {
        for(var sum = 0;sum<Math.ceil(this.con.length/8);sum++){
            var obj = {value:sum+1}
              this.show.push(obj)
            }
      },
      // 点击页码得到对应页

      // 应该把点亮函数中的index作为一个外面的变量，每次点击的时候进行改变，而非放在这个函数内
      

      // 1、获得点击框的位数，用于跳转页面的数字
      light_page: function (e) {
        var dom = e.target
        // var index = ""
        // if(a!=""){
         var index = dom.getAttribute('data-index')
        // }else{
        //   index = a
        // }
        // var index = this.page;
        this.page = 1 + Number(index)
        console.log("g", this.page);
        
      // 2、dom操作点亮页标
        // for(var h = 0 ;h <= index; h++){h==index? dom.className = "active":this.$refs.page[h].className = ""}   //单向，反向成功
        for(var h = this.show.length-1 ;h >= 0; h--){h==index? dom.className = "active":this.$refs.page[h].className = ""} 

      // 3、截取对应的数据进行显示

      },


      next(){
        // this.light_page(e,)

        },
      prve(e){
        
        
        }
    },

    created(){
      this.pons()
    },

    mounted(){
      this.$refs.page[0].className = "active"
      // this.light_page(this.$refs.page[2])
    },

    updated(){
     
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

.active{
  background: #dfcca1;
  color: #001a27 !important;
}


</style>