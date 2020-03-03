<template>
    <div style="overflow-y:scroll; height:90vh;" class="HomePageone">
        <!-- 习大大置顶占位 -->
        <my-HomePageoneoverhead :toup="homepage1[5]" />
        <!-- 轮播 autoplay="2000"-->
       <div class="van-seipe-lunbo">
        <van-swipe  :loop="false" :width="380">
         <van-swipe-item v-for="(val,i) of lunbu " :key="i">
             <div @click="lunburout(i)" class="van-img" :style="`background:url(${val.ximg}) no-repeat; background-size:100% 100%;`">
                 <div class="van-seipt-rein">
                     <span class="iconfont icon-huore">
                         <!-- <img src="../assets/reickfon.jpg"> -->
                    </span>
                    <!-- ../assets/reickfon.jpg -->
                     <span>热点精选</span>
                 </div>
                <div class="van-seipt-nerong">
                    <div class="van-seipt-zuanti" >专题</div>
                    <div>{{val.xtitle}}</div>
                    <div>
                        <span style="color:#fff;">{{val.xauthor}}</span>
                        <span style="color:#fff;">
                            {{val.xpraise}}阅读
                        </span>
                        <span style="color:#fff;">
                            23分钟前
                        </span>
                    </div>
                </div>
             </div>
         </van-swipe-item>
         <!-- <van-swipe-item >
              <div class="van-img">

             </div>
         </van-swipe-item>
         <van-swipe-item>
              <div class="van-img">

             </div>
         </van-swipe-item>
         <van-swipe-item>
              <div class="van-img">

             </div>
         </van-swipe-item> -->
        </van-swipe>
       </div> 
        <!-- 主题头部站位又一图片 -->
        <my-HomePageonehander
        @getfunction="fun" :leftposth="homepage1[14]" />
       <!-- 汽车advertising2 -->
       <!-- <my-advertising2  /> -->
       
       <!-- 主题内容占位 三个图-->
      <my-HomePageonecontent @getfunction="fun"
       :shan="picture[0]"/>
       <!-- 大图部分 -->
      <my-HomePageto 
      @getfunction="fun"
      :bigimg="homepage1[2]"/>
    
      <!-- 广告占位 -->
      <my-advertising2 />
    <!-- 第一部分完 -->
    <!-- 第二部分开始 -->
    <my-HomePageonecontent 
    @getfunction="fun"  
    :shan="picture[1]"/>

    <my-HomePageonecontent 
    @getfunction="fun"
    :shan="picture[3]"/>

    <my-HomePageonehander
    @getfunction="fun" 
    :leftposth="homepage1[11]"/>

<my-HomePageonehander @getfunction="fun" :leftposth="homepage1[10]"/>
 <my-HomePageto @getfunction="fun" :bigimg="homepage1[3]"/>
   
 <my-advertising3 />
 <!-- 第二部分结束 -->
 <!-- 第三部分开始 -->
 
  <!-- 热搜 -->
            <!--今日热搜 -->
        <div class="HomePageone-Listoftopics">
            <h2>今日热搜</h2>
           <div>
                <ul>
                    <li v-for="(val,i) of 6" :key="i">
                        <div>澳门回归20周年几家萨迪减肥的</div>
                    </li>
                </ul>
           </div>
        </div>
        <!-- 话题榜热点有个点击按钮点击显示完10个 -->
         <div  :style="height1" class="homepagoeoe-hotbot">
            <h3>话题榜</h3>
            <div class="homepagotoe-paohang"
            v-for="(valu,i) of 10" :key="i" >
                <div>{{i+1}}</div>
                <div>
                    我和我的祖国票房破300亿
                </div>
                <div>
                    
                </div>
            </div>
        </div>
            <div class="homepagoeoe-hotbot-button" style="text-align:center">
                <button @click="bigButton()" >查看更多</button>
            </div>
 <div style="height:3rem"></div>
</div>
</template>

<script>
//内容区
import HomePageoneoverhead from './themecontent/HomePageoneoverhead.vue';
import HomePageonehander from './themecontent/HomePageonehander.vue';
import HomePageonecontent from './themecontent/HomePageonecontent.vue';
import HomePageto from './themecontent/HomePageto.vue';
//广告区
import advertising1 from './advertising/advertising1.vue';
import advertising2 from './advertising/advertising2.vue';
import advertising3 from './advertising/advertising3.vue';
//汽车advertising
// import ranking from './advertising2.vue';
export default {
    components:{
        //内容区
       'my-HomePageoneoverhead':HomePageoneoverhead,
       'my-HomePageonehander':HomePageonehander,
       'my-HomePageonecontent':HomePageonecontent,
        'my-HomePageto':HomePageto,
    //广告区
    'my-advertising1':advertising1,
    'my-advertising2':advertising2,
    'my-advertising3':advertising3,
   },
   props:['homepage'],
    data(){
        return {
            //话题榜下拉按钮的高度
          height1:"height:13vh" ,
          obj:{},
           //首页数据
        homepage1:{},
        //轮播的数据
        lunbu:[],
        //三张图片的占位
        picture:{},
       
        }
    },
    beforeCreate: function () {
        
            
    
       
    },
    created () {
    },
    methods:{
        //返回时请求一下数据跳转到vuex的位置
        funs(){
            var a=this.$store.state.sun
            this.$el.scrollTo(0,a);
        },
        //获取滚动的位置并传给vuex在跳转
          fun(){
          var scroLLtop=document.documentElement.scrollTop||this.$el.scrollTop;
          this.$store.commit("setsun",scroLLtop);      
      },
        //点击度清零
       bigButton(){
           this.height1="";
       },
       //测试用的按妞妞
       wd(){
           //console.log(this.homepage1);
       },
   
       //轮播跳转
       lunburout(i){

            
           this.$router.push({path:'/HomePagetwo',query:{xtitle:this.lunbu[i].xtitle,
           xauthor:this.lunbu[i].xauthor,
           xcontent:this.lunbu[i].xcontent
           }})
       }
    },
    beforeMount(){
     
    // console.log("homepageone组件挂载前...")
    // console.log(this.homepage,7);
  },
  mounted(){
       
    // console.log("homepageone组件挂载后...")
    // console.log(this.homepage,8);
  
  },
  beforeUpdate(){
       
    // console.log("更新homepageone组件前...")
    // console.log(this.homepage,9);
   
  },
  updated(){
       this.funs(); 
    // console.log("更新homepageone组件后...")
    // console.log(this.homepage,10);
  },
  beforeDestroy(){
      
    // console.log("销毁homepageone组件前...")
    //  console.log(this.homepage,11);
  },
  destroyed(){
    // console.log("销毁homepageone组件后...")
    //  console.log(this.homepage,12);
  },
    watch:{
        homepage(){
            this.homepage1=this.homepage[0];
            this.lunbu=this.homepage[1];
            this.picture=this.homepage[2];
            
        }
    }
}
</script>
<style scoped>
   
    .HomePageone{
        padding:0.2rem 0.3rem;
        text-align:left;
        box-sizing:border-box;
    }
    
    /* 话题榜10个循环 */
    .homepagoeoe-hotbot{
        overflow:hidden;
    }
    .homepagoeoe-hotbot:after{
        content:"";
        clear:both;
        display:block; 
    }
    .homepagotoe-paohang{
        padding-left:1rem;
        height:1.6rem;
        text-overflow:ellipsis;
    }
    .homepagotoe-paohang:after{
        content:"";
        clear:both;
        display:block;
    }
    .homepagotoe-paohang div{
        float:left;
        font-size:1rem;
      
    }
    .homepagotoe-paohang>div:nth-child(1){
        width:1.3rem;
        height:1.3rem;
        border-radius:50%;
        background:rgb(80, 81, 82);
        text-align:center;
        color:#fff;
        margin-right:0.5rem;
        font-size:1rem;
        line-height:1.5rem;
    }
    
    .homepagotoe-paohang>div:nth-child(3){
        float:right;
    }
    /*该循环生成的背景颜色*/
     .homepagoeoe-hotbot>div:nth-child(2)>div:nth-child(1){
         background:red;
     }
     .homepagoeoe-hotbot>div:nth-child(3)>div:nth-child(1){
         background:orange;
     }
     /*左边跟的热图标*/
      .homepagoeoe-hotbot>div:nth-child(3)>div:nth-child(3):after{
        text-align:center;
        content:"热";
        width:1.3rem;
        height:1rem;
        display:block;
      
        background:#cb5151;
        color:#ddd;
        font-weight:400;
        font-size:0.7rem;
       margin-top:0.1rem;
        border-radius:7px;
    } 
     .homepagoeoe-hotbot>div:nth-child(5)>div:nth-child(3):after{
        text-align:center;
        content:"新";
        width:1.3rem;
        height:1rem;
        display:block;
        background:#dd9a1d;
        color:#ddd;
        font-weight:400;
        font-size:0.7rem;
       margin-top:0.1rem;
        border-radius:7px;
    } 
    /*话题榜下拉按钮*/
    .homepagoeoe-hotbot-button>button{
        width:25vw;
        font-size:1rem;
        color:#000;
        background:#fff;
    }
    .homepagoeoe-hotbot-button>button:after{
        content:">";
        float:right;
            width:0.8rem;
            height:0.8rem;
            color:#fff;
            background:#000;
            display:block;
            font-size:0.8rem;
            margin:0.2rem;
    }




     /* 今日热搜 */
    .HomePageone-Listoftopics::after{
        content:"";
        display:block;
        clear:both;
    
    }
    .HomePageone-Listoftopics>div>ul>li{
       
        width:44vw;
        height:5vh; 
        margin:0.5rem 0.5rem;
        border-radius:50px;   
        float:left;
        background:#eee; 
    }
    .HomePageone-Listoftopics>div>ul>li>div{
        width:31vw;
        line-height:5vh;
        float:left;
        font-size:1rem;
        overflow: hidden;
        text-overflow:ellipsis;/*溢出点点*/
        white-space: nowrap;
        padding-left:0.5rem;
    }
    /*热 */
    .HomePageone-Listoftopics>div>ul>li:nth-child(3):after{
        text-align:center;
        content:"热";
        width:1.5rem;
        height:1.5rem;
        display:block;
        background:#cb5151;
        color:#ddd;
        font-weight:400;
        float:right;
        margin:0.3rem;
        font-size:1rem;
        box-sizing:border-box;
        padding-top:0.2rem;
        border-radius:7px;
    }



    /* 轮播 */

    .van-img{
        width:90vw;
        height:30vh;
       border-radius:10px;
       

      /* margin-right:1rem */
    }
    /* 热点精选图标 */
    .van-seipt-rein{
        padding:0.5rem 0rem 0rem 1rem;
         height:35%;
    }
    .van-seipt-rein>span{
        font-size:0.8rem;
         color:#211c1a;
         
    }
    /* 专题和标题 */
    .van-seipt-nerong{
       
        width:95%;
        height:63%;
        padding-left:1rem;
    }
    .van-seipt-zuanti{
        margin:0rem 0.3rem; 
        width:2.1rem;
        height:1.1rem;
        border-radius:3px;
        color:#37a;
        background-color:#eee;
        text-align:center;
        box-shadow:0 0 2px #37a inset;

    }
    .van-seipt-nerong>:nth-child(2){
        margin:1rem 0;
        color:#ecf0f5;
        font:300  1.5rem/1.5rem "行楷";
        max-height:7vh;
    }
    .van-seipt-nerong>:nth-child(3)>span{
         color:#211c1a;
         margin-right:0.2rem;
    }
   
/* 修改的 */

   
</style>