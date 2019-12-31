var toTop={
    top(){
    // 位移三要素
    // 1.总距离(兼容性)
    // 2.总时间
    // 3.总步数
    // 每一步距离
    // 每一步时间
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var time=800
    var steps=80
    var step=scrollTop/steps;
    var intervals=time/steps;
    // 设置定时器

    var timer=setInterval(()=>{
        // 每一步减少的距离
        window.scrollBy(0,-step);
        // 移动一次总步数减少1
        steps--;
        // 设置停止
        if (steps==0){
            // 停止定时器
            clearInterval(timer)
        }
    },intervals)
  }
}

export default toTop
