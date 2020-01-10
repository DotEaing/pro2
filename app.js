// 引入模块
const express=require('express');
const mysql=require('mysql');
const cors=require('cors');//解决跨域
const session=require('express-session');
const bodyParser=require('body-parser');

// 连接池
var pool=mysql.createPool({
   host:'127.0.0.1',
   user:'root',
   password:'',
   port:'3306',
   database:'panxz',
   connectionLimit:15
})
var server=express();
// cors跨域
server.use(cors({
  //允许程序列表
  origin:["http://127.0.0.1:8080","http://localhost:8080","http://localhost:8081"],
  credentials:true//每次请求需要验证
}))
//5.配置session模块
server.use(session({
  secret:'12346',
  resave:true,//请求时更新数据
  saveUninitialized:true//保存初始数据
}))

// 静态目录
server.use(express.static('public'))
// 监听
server.listen(5050,()=>{
  console.log("it is runing!");
});

// 解析post
server.use( bodyParser.urlencoded({
    extended:false
  }) );

/** 路由 */

// 获取首张图片
// server.get('/home',(req,res)=>{
//   // var sql="select class,k_id from panxz_k_img  where "
//   var a=req.query.img_folder;
//   // 页数
//   var pno = "";
//   // 每页数量 
//   var ps = 8;
//   // 设置默认值
//   if(!pno){pno=1}
//   ps = parseInt(ps);
//   var offset = (pno-1)*ps;
//   var sql =`select * from ( select * from ${a} group by class) as base limit ${offset},${ps}` //group by默认取分组第一条
//   console.log(sql);
//   pool.query(sql,(err,result)=>{
//     if(err) throw err;
//     res.send(result)
//   })
// })

server.get('/home',(req,res)=>{
  // var sql="select class,k_id from panxz_k_img  where "
  var a=req.query.img_folder;
  var sql =`select * from ( select * from ${a} group by class) as base` //group by默认取分组第一条
  console.log(sql);
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})



server.get('/original',(req,res)=>{
  // var sql="select class,k_id from panxz_k_img  where "
  var a = req.query.img_folder;
  var b = req.query.name;
  var pno = 1;
  var ps = 8;
  // 设置默认值
  if(!pno){pno=1}
  ps = parseInt(ps);
  var offset = (pno-1)*ps;
  var sql =`select * from ( select * from ${a} where category="${b}" group by class) as base limit ${offset},${ps}` //group by默认取分组第一条
  console.log(sql);
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})


// 获取单组图片
server.get('/singlePages',(req,res)=>{
  // var sql="select class,k_id from panxz_k_img  where "
  var a=req.query.img_folder;
  var b=req.query.name;
  var sql =`select * from ${a} where name="${b}"` //单组，全部
  console.log(sql);
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})

// 获取单组图片(原创图)
server.get('/originalPages',(req,res)=>{
  // var sql="select class,k_id from panxz_k_img  where "
  var a=req.query.img_folder;
  var b=req.query.name;
  var sql =`select * from ${a} where name="${b}"` //单组，全部
  console.log(sql);
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})



// 获取此组上一组和下一组的名字
server.get("/flip",(req,res)=>{
  var a = req.query.img_folder;
  var b = req.query.name; 
  var sql1 = `select class from ${a} where name = "${b}" group by name `
  pool.query(sql1,(err,result)=>{
    if(err) throw err;
    var fir_name = result 
    var sql2 = `select name from ${a} where class = ${fir_name}+1 group by name`
    pool.query(sql2,(err,result)=>{
      if(err) throw err;
      console.log(result);
    })
  })
})


// =======================================================================================

// 登录
server.get("/login",(req,res)=>{
  //(1)获取脚手架参数 uname upwd
  var phone = req.query.phone;
  var upwd = req.query.upwd;
  console.log(upwd,phone);
  
  //(2)创建sql语句查询
  var sql = "SELECT * FROM panxz_user WHERE phone=? AND upwd = ?";
  console.log(sql);
  
  //(3)执行sql语句
  pool.query(sql,[phone,upwd],(err,result)=>{
      if (err) throw err;
      console.log(result);
   //(4)获取执行结果
   //(5)判断查询是否成功 result.length
   
   if(result.length==0){
     res.send({code:-1,msg:"手机或密码有误"})
   }else{
     //5.1:保存用户id在session对象中
     //result数据格式 [{id:1}]
     req.session.uid = result[0].uid;
    res.send({code:1,msg:"登录成功","result":result});
}
    //(6)将结果返回脚手架
  })
  })



  // 跳转注册
server.get('/register',(req,res)=>{
  // 获取页面数据
  var phone = req.query.phone;
  // 查询数据库是否存在
    // 创建查询语句
    var sql = "SELECT * FROM panxz_user WHERE phone=?"
    // 执行查询
    pool.query(sql,[phone],(err,result)=>{
      if(err)throw err;

      if(result.length==0){
        res.send({code:-1,msg:"用户未注册"})
      }else{
        //5.1:保存用户id在session对象中
        //result数据格式 [{id:1}]
        req.session.uid = result[0].uid;
       res.send({code:1,msg:"用户已存在"});
      }
      //(6)将结果返回脚手架
    })
    })


    // 实现注册
    server.get('/userInfor',(req,res)=>{
      //创建对象 
      var obj = req.query
      var uname = obj.uname;
      var upwd = obj.check_upwd;
      var phone = obj.phone;
      var email = obj.email;
      var user_name = obj.user_name;
      var gender = obj.gender;
      var regObj=[uname,upwd,email,phone,user_name,gender]  
  var sql="INSERT INTO panxz_user VALUES (null,? ,? ,? ,? ,? ,? )";
  pool.query(sql,regObj,(err,result)=>{
    if(err)throw err;
    console.log('====================================');
    console.log(result.affectedRows);
    console.log('====================================');
    //(4)获取执行结果
    //(5)判断查询是否成功 result.length
    if(result.affectedRows>0){
      res.send({code:1,msg:"注册成功"})
    }else{
     res.send({code:-1,msg:"注册失败"});
    }
    //(6)将结果返回脚手架
   })

  })

  // 查询
  server.get("/retrievePwd",(req,res)=>{
    //(1)获取脚手架参数 uname upwd
    var phone = req.query.phone;
    var email = req.query.email;
    console.log(email,phone);
    
    //(2)创建sql语句查询
    var sql = "SELECT * FROM panxz_user WHERE phone=? AND email = ?";
    console.log(sql);
    
    //(3)执行sql语句
    pool.query(sql,[phone,email],(err,result)=>{
        if (err) throw err;
        console.log(result);
     //(4)获取执行结果
     //(5)判断查询是否成功 result.length
     
     if(result.length==0){
       res.send({code:-1,msg:"手机或密码有误"})
     }else{
       //5.1:保存用户id在session对象中
       //result数据格式 [{id:1}]
       req.session.uid = result[0].uid;
      res.send({code:1,msg:"登录成功","result":result});
  }
      //(6)将结果返回脚手架
    })
  })

  // 修改

  server.get("/retrievePwd2",(req,res)=>{
    //(1)获取脚手架参数 uname upwd
    var phone = req.query.phone;
    var email = req.query.email;
    var new_upwd = req.query.new_upwd;
    
    console.log(email,phone,new_upwd);
    
    //(2)创建sql语句查询
    var sql = " UPDATE panxz_user SET upwd = ? WHERE email = ? AND phone=?";
    console.log(sql);
    
    //(3)执行sql语句
    pool.query(sql,[new_upwd,email,phone],(err,result)=>{
        if (err) throw err;
        console.log(result);

     if(result.affectedRows==1){
       res.send({code:1,msg:"修改成功"})
     }else{
      res.send({code:-1,msg:"修改失败","result":result});
  }
      // (6)将结果返回脚手架
    })
  })



