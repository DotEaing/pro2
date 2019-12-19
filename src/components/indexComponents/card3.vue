<template>
  <div>
     <div class="card lf"  v-for="(slides,index) of con" :key="index" >

                <router-link :to="slides.link" >
                    <span style="width:100%;height:256px">
                        <img :src="slides.src" :alt="slides.name" >
                    </span>
                    <div class="cl">
                        <h3 class="s">{{slides.name}}</h3>
                        <em class="fa fa-angle-right fa-lg"></em>
                    </div>
                </router-link>

     </div>
  </div>
</template>
<script>
export default {
    props:["con"],
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.card{
    width: 31%;
    margin-right: 1%;
    margin-bottom: 2%;
    overflow: hidden;
}


.card a,span{
    display: block;
    overflow: hidden;
    text-align:center
}

.card a img {
    width: 100%;
    height: 256px;
}

.card div {
    line-height: 58px;
    padding: 0 20px;
    border: 1px solid #444f51;
    border-top: none;
    color: #dfcca1;
    background: #001a26;
    height: 58px;
    transition: all .3s;
}

.card div:hover{
    background: #dfcca1;
    color: #001a26;
}

.card div em {
    font-style: normal;
    width: 30px;
    height: 30px;
    float: right;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    background: #032b3e;
    margin-top: 15px;
}

.s {
    white-space: nowrap;
     text-overflow: ellipsis; 
    overflow: hidden;
    display: block;
}
.card  div h3 {
    float: left;
    font-size: 17px;
    /* width: 80%; */
}
.fa{
     color: #dfcca1;
}
</style>