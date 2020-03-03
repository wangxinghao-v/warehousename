<template>
    <div class="mparticulars">
        <div class="mparticulars-hender">
            <div class="mparticulars-hender-1"> 
            </div>
            <div class="mparticulard-tupian"> 
            </div>
            <!-- 左边图片 -->
           <div class="mparticulard-left">
                <img style="float:left; width:100%;height:100%" src="../assets/bxqy.jpg">
           </div>
           <!-- 右边简介 -->
            <div class="mparticulard-right">
                <div>冰雪奇缘
                    <span style="color:#ddd">(2019)</span> 
                </div>
                <div class="grade">7.8</div>
                <div>导演</div>
                <div>中国</div> 
            </div>
        </div>
        <!-- 下方评论区 -->
        <div class="mparticulars-comment">
            <!-- 电影简介部分 -->
            <div class="mparticulars-comment-intro">
                <h3>电影简介····</h3>
                <div class="mparticulars-comment-intro-1" :style=height1 >
                    {{text2}}<span class="mparticulars-span" :style=show> >>>点击显示全部</span>
                     <div class="mparticulars-comment-intro-2">
                    </div> 
                </div>
            </div>
            <!-- 热门推荐 -->
            <div class="mparticulars-recommend">
                <h3>用心推荐····</h3>
                <ul class="mparticulars-recommend-ul" v-for="(val,i) of 2" :key="i" >
                    <li v-for="(val,i) of 4" :key="i" >
                        <img src="../assets/bxqy.jpg">
                        <h4>电影频道</h4>
                    </li>
                </ul>
            </div>
            <!-- 评论组件占位 -->
                <!-- <my-advertising1 /> -->
            <my-Comment />
        </div>
    </div>
</template>
<script>
// import advertising1 from './advertising1.vue'
import comment from './Comment.vue'
export default {
    name:"Mparticulars",
    components:{
    //  'my-advertising1':advertising1,
        "my-Comment":comment
    },
    data(){
        return {
         //从接口获取的数据测试写死了
         text1:" 阴间有法，所有亡者在死后的49天内都要经过七次审判——分别在杀人狱、懒惰狱、欺骗狱、不义狱、背叛狱、暴力狱、天伦狱中进行，只有通过了七次空间和空间客家话客家话客家话客家话空间黑科技审判宣告无罪的亡者，才有获得新生的机会jlkj局拉科技",
         //动态为元素添加高度
        height1 :"",
        vla:0,
        text2:"",
        //让>>>点击显示全部span还没写
        show:"",
        }
       
    },
     created () {
         //判断字符串的高度好让点击全部显示
          var aa=this.text1.length;
          if(aa>148){
             this.height1="height:19vh;";
            this.text2=this.text1.slice(0,148);
          }else{
              this.height1="";
              this.text2=this.text1;
          }
          
     },
    methods:{

    },
     watch:{
       
    }
    
}
</script>

<style scoped>
   .mparticulars-hender:after{
        content: "";
        display:block;
        clear:both;   
} 
     .mparticulars-hender-1{
        background:url(../assets/bxqy.jpg) no-repeat 0px 0px;
        height:30vh;
        opacity:.5;
        background-size:100% 100%;  
        filter:blur(2px);/*滤镜模糊程度**/
       
     }
   .mparticulard-tupian{
       position:absolute;
        width:100%;
        height:30vh;
        background:#222;
        left:0;
        top:0;
        z-index:-1;
        }
        /*左边图片*/
        .mparticulard-left{
           position:absolute; 
           top:1rem;
           left:0.5rem;
            width:40vw;
            height:25vh;
        }
        /*右边字体*/
        .mparticulard-right{
            position:absolute; 
           top:1rem;
           right:0px;
            width:57vw;
            color:#fff;
            height:25vh;
        }
        .mparticulard-right>div{
            margin:0.8rem;
            max-width:100%;
            overflow:hidden;
            height:1.5rem;
            font:400  1.2rem/1.5rem "宋体";
        }
       .mparticulard-right .grade{
            color:#fc0;
            font:700  1.6rem/1.5rem "宋体";
            
        }
        /*下方评论区*/
          /*电影简介部分 */
           .mparticulars-comment{
              background:#d4d8dc;
              
          }
        .mparticulars-comment:after{    
        content: "";
        display:block;
        clear:both;   
        }  
          
        .mparticulars-comment-intro h3{
            color:#007722;
            text-align:left;
        }
        .mparticulars-comment-intro-1{
            margin-left:0.2rem;
            width:98vw;
            color:#555;
            border-radius:7px;
            border:1px solid #c5c7ca;
            text-align:left;
            text-indent:2rem; /*首航缩进*/
            overflow: hidden;/*超出部分隐藏*/
        }
        /* 动态显示或隐藏的span */
      .mparticulars-span{
          color:#37a;
          float:right;
      }
      /*推荐部分*/
      .mparticulars-recommend-ul{
          width:100vw;
          height:23vh;
        display:flex; 
		margin:.5rem 0rem 2rem 0rem;
		
      }
    .mparticulars-recommend-ul>li{
        width:22vw;
        margin-left:2.5%;
        color:#37a;
        
    }
    .mparticulars-recommend-ul img{
        width:22vw;
        height:23vh;
        }
     .mparticulars-recommend>h3{
         text-align:left;
         color:#007722;
     }
</style>
