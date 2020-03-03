<template>
<div>
    <mt-tab-container v-model="active">
        <mt-tab-container-item id="t1">
          <div class="HomePageone1">首页</div>
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            
            <!-- 首页的页面 -->
            <my-HomePageone :homepage="[homepage,lunbu,picture]" />
           

         </van-pull-refresh>
        </mt-tab-container-item >
        <mt-tab-container-item id="t2">
            <div class="t2-header">
              <div @click="newold(1)" class="t2-heager-left">
                <h2  class="t2-heager-t1 t2-h2">新上映</h2>
                
              </div>
              <div @click="newold(2)" class="t1-heager-right">
                <h2 class="t2-heager-t2 t2-h2">旧经典</h2>
              </div>
            </div>
         <div v-show="shows==1" class="t2-fiath">
           <div class="t2-child">
              <div class="t2-left-picture">
             <img class="t2jimg" :src="bannerpicture">
            </div>
            <div class="t2-right-picture">
                <div class="t2-right-1">{{valu2.movieName}}</div>
                <h4 class="t2-right-2">{{valu2.releaseInfo}}</h4>
                <h5 class="t2-right-3">综合票房</h5>
                <h1 class="t2-right-4">{{valu2.viewInfoV2}}</h1>
                <h5 class="t2-right-5">票房占比{{valu2.boxRate}}</h5>
               <div class="t2-right-top">
                 <div class="t2-right-left">
                   <h6>排片场次</h6>
                   <h3 style="color:#ddd">{{valu2.showInfo}}</h3>
                   <h6>占比{{valu2.seatRate}}</h6>
                 </div>
                 <div class="t2-right-right">
                   <h5>场均人次</h5>
                   <h3 style="color:#ddd">{{valu2.avgShowView}}</h3>
                   <h6>上座率{{valu2.avgSeatView}}</h6>
                 </div>
               </div>
            </div>
           </div>
          <!-- 排行占位 -->
          <my-ranking :ranvlue="gotomovie" @childvaul='parent' />
         </div>
         <div v-show="shows==2" class="t2-old-scriptures">
           <!-- 旧经典占位 -->
            <Oldclassic></Oldclassic>
         </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="t3">
            订单
        </mt-tab-container-item>
        <mt-tab-container-item id="t4">
            我的
        </mt-tab-container-item>
        
    </mt-tab-container>
 <mt-tabbar class="mint-tabbar" fixed v-model="active">
    <!-- 需求：当用户点击 -->
    <!-- slot="icon"名字叫插槽把图片后的文字调节到图片的正下方 -->
    <mt-tab-item  id="t1" >
      <img slot="icon" src="../assets/gunggao.jpg">首页
    </mt-tab-item>
    <mt-tab-item id="t2">
      <img slot="icon" src="../assets/gunggao.jpg">电影
    </mt-tab-item>
    <mt-tab-item id="t3">
      <img slot="icon" src="../assets/gunggao.jpg">订单
    </mt-tab-item>
    <mt-tab-item id="t4">
      <img slot="icon" src="../assets/gunggao.jpg">我的
    </mt-tab-item>
  </mt-tabbar>

</div>
</template>
<script>
//首页
import HomePageone from './HomePageone.vue'
//循环排名组件
 import ranking from './ranking.vue'
//一百不佳作页
import Oldclassic from './Oldclassic.vue'
export default {
    name: 'HelloWorld',
    data(){
    return {
      //teboo切换的默认值
        active:"t1",
      //电影页面的切换
      shows:1,
      //下拉刷新
      count: 0,
      isLoading: false,
      //首页数据
       homepage:{},
       //轮播的数据
       lunbu:[],
       //三张图的数据
       picture:{},
      //请求的路径
      url:'http://127.0.0.1:3000',
       //电影页的数据
      gotomovie:[],
       //电影banner的显示数据
      valu2:[],
      //电影banner图片的显示数据
      bannerpicture:"",
      };
      
     
     
    },
   components:{
      'my-ranking':ranking,
      //首页
      'my-HomePageone':HomePageone,
      Oldclassic,
   },
    created () {
      //第二个钩子函数：组件实例创建完成，属性已绑定，但dom还未生成，$el属性还不存在
      this.index();
     this.indexlubu();
     this.shanporotu(); 
     //电影页面的数据加载
     this.movie();
     
  
  },
   methods:{
     
    
     //首页的数据加载
    index(){
        this.axios.get(this.url+'/homepage').then(result=>{
              this.homepage=result.data; 
          }).catch(err=>{
            console.log('首页加载数据有误');
             console.log(err);
        });
    },
    indexlubu(){
      //轮播
         this.axios.get(this.url+'/lunbo').then(result=>{
              this.lunbu=result.data; 
          }).catch(err=>{
            console.log('首页加载数据有误');
             console.log(err);
        })
    },
    //三张图的请求数据
    shanporotu(){
      this.axios.get(this.url+'/shanporotu').then(result=>{
        //console.log(result.data);
        this.picture=result.data;
      }).catch(err=>{
         console.log('首页加载数据有误');
             console.log(err);
      })
    },
        dsd(){
        this.$messagebox.alert("提示的内容","确定");
    },
    //下拉下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    //电影面
    movie(){
      var url= this.HOST;
      this.axios.get(url).then(result=>{
        this.gotomovie=result.data.data.list;
  }).catch(err=>{
    console.log("公用api接口有问题");
  })
  
  },
  
     
   
    //新旧电影列交换
    newold(e){
      if(e==1){ 
        this.shows=e;
      }else{
        this.shows=e;
      }
      
    },
   parent(i,tem){
     this.valu2=tem;
     var movieId=tem.movieId;
     this.axios.get(this.url+'/movie',{params:{movieId}}).then(result=>{
       this.bannerpicture=result.data[0].moviepicture
  }).catch(err=>{
    console.log("公用api接口有问题");
  })
        // console.log("调用了父组件的函数并传了个值",i,tem);
    },
    
   
   },

   watch:{
    
        
   
}
}

</script>
<style>

    /* 首页*/
    .HomePageone1{
      width:100%;
      height:6vh;
      border-radius:0 0 0.2rem 0.2 rem;
      font:700 1.2rem/2.5rem "宋体";
      background:#d5efec8c;
    }
    /* 电影 */
    /*表头部分*/
    .t2-header{
      width:100vw;
      height:7vh;
      background:#373743;
      color:#fff;
      padding-top:0.3rem; 
     
      box-sizing:border-box;
    }
    .t2-heager-left{
      width:45vw;
      float:left;
  
    }
    .t1-heager-right{
      width:45vw;
      float:right; 
    }
    .t2-heager-t1{
      float:right;
    }
    .t2-heager-t2{
      float:left;
    }
    .t2-h2{
      font:700 16px/30px "SimSun";
      
      border-radius:50px;
      width:20vw;
      height:5vh;
    }
    .t2-h2:hover{
       background-color:#000;
    }
   
    /*投屏部分*/
     .t2-fiath:after{/*new muve 父元素*/
        content:"";
        clear:both;
        display:block;
    }
    .t2-child{
        background:#000000;
        width:100%;
        padding:2px;
    }
    .t2-child:after{/*new muve 第一个子元素*/
        content:"";
        clear:both;
        display:block;
    }
    /*t2的左边*/
    .t2-left-picture{
       background:#373743;
        float:left;
        width:59%;
        height:28vh;
        border-right:2px solid #000000 ;
    }
    /*左边的图片*/
    .t2jimg{
      width:59vw; height:28vh;
    }
    /*t2的右边*/
    .t2-right-picture{
        float:left;
        background:#373743;
        width:39%;
        height:28vh;
        color:#96969c
    }
    /*右边信息*/
    .t2-right-1{
      font:700 19px/22px "微软雅黑";
      margin-top:4px;
      color:#ddd;
      max-height:6vh;

      text-overflow:ellipsis;
       -webkit-line-clamp:2;
       overflow:hidden;
    }
    .t2-right-2{
      margin-top:.3rem;
    }
    .t2-right-3{
      margin-top:.3rem;
    }
    .t2-right-4{
      color:#ff6a00;
       margin-top:.2rem;
    }
    .t2-right-5{
      margin-top:.2rem;
    }
   .t2-right-top{
     margin-top:15px;
   }
    .t2-right-left{
      width:50%;
      float:left;
      font-size:.3rem;
     
    }
    .t2-right-right{
      width:50%;
      float:right;
      
    }
    /*旧经典*/
    .t2-old-scriptures{
    
    }
</style>

