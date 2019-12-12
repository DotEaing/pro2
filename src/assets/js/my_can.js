 
 var my_can={
 // 画板验证码
  mycanvas(c1,callback){
  // 获得max值到最小值之间的数
  function rn(min,max){
      return  Math.floor(Math.random()*(max-min)+min);
  }
  //2.新建一个函数产生随机颜色
  function rc(min,max){
      var r=rn(min,max);
      var g=rn(min,max);
      var b=rn(min,max);
      return `rgb(${r},${g},${b})`;
  }
  //3.填充背景颜色,颜色要浅一点
  var w=100;
  var h=40;
  var ctx=c1.getContext("2d");
   ctx.fillRect(0,0,w,h);
  
  //4.随机产生字符串
  var pool="ABCDEFGHIJKLIMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz1234567890";
  var arr=[];
  var code;
  for(var i=0;i<4;i++){
      var c=pool[rn(0,pool.length-1)];//随机的字
      arr.push(c);
      var fs=rn(20,30);//字体的大小
      var deg=rn(-30,30);//字体的旋转角度
      ctx.font=fs+'px Simhei';
      ctx.textBaseline="top";
      ctx.fillStyle=rc(100,255);//字体颜色
      ctx.save();
      ctx.translate(25*i+15,15);//字所在的位置
      ctx.rotate(deg*Math.PI/180);
      ctx.fillText(c,-15+5,-10);
      ctx.restore();
  }
    code=arr.join("")
    return code.toLowerCase()
}
}
export default my_can