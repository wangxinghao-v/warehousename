//1.下载：npm i mysql(mysql驱动) express(web服务器) express-session(会话session对象) cors(跨域处理)
//2.引入四个第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');//解析,用req.body获取post参数

    
//sesion对象是服务器端用来保存此次会话中的数据；
//此次会话中所有服务器端程序都可以使用，要求：数据少1kb之内不要汉字或者空格
//session对象：登陆凭证uid：将用户权限保存
const session = require("express-session");
//3.配置连接池：基本效率保证
var pool = mysql.createPool({
  //自己的数据库在哪就写那
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"xiaogao",
  //端口号
  port:3306,
  connectionLimit:20
})
//4.创建web服务器
var server=express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
//5.配置允许跨域  允许组件地址访问的列表因为有可能是多个所以必须是个数组
server.use(cors({
  origin:["http://127.0.0.1:8080",
          "http://localhost:8080"],
          //验证每次访问（请求）是不是合法的如果不写跨域错误
          credentials:true
}))
//6.配置session环境
server.use(session({
  //session有个机制为了保密session会为自己的数据加密secret用于保存数据加密条件
  secret:"128位安全字符串",
  resave:true,//每次请求更新数据
  saveUninitialized:true,//保存初始数据
  //session对象存数据req.session.uid=3
  //取数据var uid=req.session.uid;
})); 
//托管目录到public目录下
server.use(express.static("public"));
server.listen(3000);
server.get("/h",(req,res)=>{
    console.log("前台接收到了一个数据");
	res.send("nihaaho");
})
//路由接口
//首页加载
server.get("/homepage",(req,res)=>{
    var sql="SELECT * FROM xg_index";
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      if(result.length==0){res.send({code:-1,msg:"查询有误"})
    }else{
      res.send(result)
    }
    })
});
// 轮播
server.get("/lunbo",(req,res)=>{
  var sql="SELECT * FROM xz_carousel";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.length==0){res.send({code:-1,msg:"查询有误"})
  }else{
    res.send(result)
  }

  })
})
// 三张图加载
server.get("/shanporotu",(req,res)=>{
  var sql="SELECT * FROM xg_hotbot";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.length==0){res.send({code:-1,msg:"查询有误"})
  }else{
    res.send(result)
  }

  })
})

//添加评论接口Comment
server.post('/Comment',(req,res)=>{
  var speak=req.body.params.str;
  var id=req.body.params.textment;
  var xtime=req.body.params.xtime;
  if(id!=="undefined"){
    var sqls=`INSERT INTO xcomment VALUES(?,?,?,?,?)`;
    pool.query(sqls,[null,id,speak,xtime,0],(err,result)=>{
      if(err) throw err;
        res.send({code:-1});
    })
  }else{
    res.send({code:1,val:"查询出错Comment接口"})
  } 
  
  // var sql="SELECT xpicture=? FROM xcomment"
  // pool.query(sql,id,(err,result)=>{
  //   if(err) throw err;
  //   if(result.length!==0){
  //     //xid=${null},xpicture=${id},comment=${speak},xtime=${xtime}
  //   }
  // })
  
});
//循环查到的评论个数
server.get("/forcomment",(req,res)=>{
  var uid=req.query.id;
  var sql="select * from xcomment where xpicture=?";
  if(uid===undefined){
    res.send({val:"forcomment接口有问题"});
  }else{
    pool.query(sql,uid,(err,result)=>{
      if(err) throw err;
      if(result.length!==0){
        res.send(result);
      }else{
        res.send({vla:-1,vla:"暂无评论"});
      }
  })
  }
})
//评论点赞功能like
server.post("/like",(req,res)=>{
  var id=req.body.params.id;
  var ii=req.body.params.ii;
  var likee=req.body.params.lek;
  var sql="UPDATE  xcomment SET likee=? WHERE xid=?";
  if(ii==1){
    pool.query(sql,[likee,id],(err,result)=>{
        if(err) throw err;
        res.send({code:1})
    })
  }else{
    pool.query(sql,[likee,id],(err,result)=>{
      if(err) throw err;
      res.send({code:-1})
  })
}
})
//电影图片的点击展示
server.get("/movie",(req,res)=>{
  var movieid=req.query.movieId;
  var sql="SELECT * FROM bannermovie WHERE movieId=?";
  if(movieid=="uidefend"){
    res.send("movie这个接口有问题");
  }else{
    pool.query(sql,movieid,(err,result)=>{
      if(err) throw err;
      if(result.length==0){
        res.send({code:-1,msg:"返回数据有误"})
      }else{
        res.send(result);
      }
    })
  }
})
server.get("/messagemovie",(req,res)=>{
  var sql="SELECT * FROM messagemovie";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.send({code:-1,msg:"返回数据有误"})
    }else{
      res.send(result);
    }
  })
})
//获取参数uname/upwd。login的get请求跟一个回调函数返还一个请求主体req和响应主体res登录路由
server.get("/login",(req,res)=>{
  //接收请求的数据
  var uid=req.query[0];
  console.log(uid);
  
  //创建sql语句
  var sql="SELECT * FROM xg_index WHERE xid=?";
  //执行sql语句,第一个形参是sql语句第二个是要查询的数据，第三个跟了个回调
  pool.query(sql,uid,(err,result)=>{
    //如果数据库出现了错误，程序停止并抛出错误（当程序执行发生严重的错误时发错误）
    if(err) throw err;
    if(result.length==0){
      res.send({code:-1,msg:"SELECT ERR"});
    }else{
      console.log(result);
      res.send(result)}

  })
})
