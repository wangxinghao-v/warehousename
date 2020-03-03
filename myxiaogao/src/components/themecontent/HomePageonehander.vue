<template>
 
        <div @click="zhidingyi">
         <!-- 主题头部 -->
       <div class="HomePageone-hander">
           <div>
              <div>
                  <!-- 标题 -->
                  {{leftposth1.xtitle
}} 
              </div>
              <!-- 作者 -->
              <div>
                  {{leftposth1.xauthor}}
                  <span style="margin-left:1rem;font:400 0.1rem/0.1rem '正楷' ;">
                 
                  {{leftposth1.xpraise}}
                </span>
              </div>
           </div>
           <div>
               <img :src="leftposth1.ximg
" alt="">
                <!-- <img src="../../assets/choiceness/quanjian.jpg"> -->
           </div>
       </div>
    </div>
  
</template>
<script>
export default {
    props:["leftposth"],
    data(){
        return{
            leftposth1:"",
        }
    },
    methods:{
        zhidingyi(){
           
            this.$emit("getfunction");
            this.$router.push({path:'/HomePagetwo',query:{xcontent:this.leftposth1.xcontent,xtitle:this.leftposth1.xtitle,xauthor:this.leftposth1.xauthor,xpicture:this.leftposth1.xpicture}});
        },
        //记录滚动位置的函数
        setfun(){
            
        },
          router(){
            
        }
    },
    watch:{
        leftposth(){
            this.leftposth1=this.leftposth;
        }
    }
}
</script>
<style scoped>
     /* 主题头部 */
     .HomePageone-hander{
         border:1px solid #ddd;
         border-radius:7px;
         margin:0.2rem 0rem;
         text-align:left;
    } 
    .HomePageone-hander:after{
        content:"";
        display:block;
        clear:both;
    }
    .HomePageone-hander>div{
        float:left;
        height:13vh;

    }
    .HomePageone-hander>div:nth-child(1){
        width:65%;
        height:13vh;
    }
    .HomePageone-hander>div:nth-child(1)>div:nth-child(1){
        width:100%;
        font:700 1.5rem/2rem "正楷" ;
        max-height:4rem;
        color:black;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-top:0.2rem;
    }
    .HomePageone-hander>div:nth-child(1)>div:nth-child(2){
        margin-top:0.8rem;
       margin-left:0.8rem;
    }
    .HomePageone-hander>div:nth-child(2){
        width:35%;
        padding:0.5rem;
        box-sizing:border-box;

    }
    .HomePageone-hander>div:nth-child(2)>img{
        width:100%;
        height:100%;
        border-radius:7px;
    }
</style>