<template>
  <div>
    <ul class="card_box mid cl">   
      <li class="card" v-for="(itmes,index) of itme" :key="index">
        <router-link >

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
              <h3 class="s">{{items.name}}</h3>
              <em class="e01"></em>
              <em class="e02"></em>
              <em class="e03"></em>
              <em class="e04"></em>
            </div>
        </router-link>
      </li>
    </ul>
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

.card{
    float: left;
    width: 24.25%;
    margin-right: 1%;
    margin-bottom: 45px;
}

.card a {
    display: block;
}

.card span {
    display: block;
    position: relative;
    border: 1px solid #444f51;
    background: #000;
}
.card img {
    width: 100%;
    height: auto;
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

.card div {
    position: relative;
    height: 75px;
    line-height: 75px;
    border: 1px solid #444f51;
    margin-top: 5px;
}

.card div h3 {
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


</style>