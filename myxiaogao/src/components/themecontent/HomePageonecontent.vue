<template>
<!-- 主题内容占位 -->
    <div @click="router">
         <div class="HomePageone-content">
           <div >{{text1.xtitle}}  
              
           </div>
           <div>
               <img :src="text1.xphotograph1" />
                <img :src="text1.xphotograph2" />
                 <img :src="text1.xphotograph3" />
           </div>
           <!-- 作者 -->
           <div style="margin:0.5rem; margin-top:0rem;">{{text1.xauthor}}
               <!-- 评论 -->
                  <span style="margin-left:1rem;font:400 0.1rem/0.1rem '正楷' ;">{{text1.xpraise}}评</span>
              </div>
       </div>
    </div>
</template>
<script>
export default {
    props:["shan"],
    data(){
        return{
          text1:{}
        }
    },
     created () {
        
         //props接到参数还没到就已经启动这个钩子了所以是uandifend不能用要上watch中用
     },
    methods:{
        router(){
             this.$emit("getfunction");
            this.$router.push({path:'/HomePagetwo',query:{xcontent:this.text1.xcontent,xtitle:this.text1.xtitle,xauthor:this.text1.xauthor,xpicture:this.text1.xpicture}});
        }
    },
     watch:{
         shan(){
             this.text1=this.shan;
         }
     }
}
</script>
<style scoped>
     /* .<!-- 主题内容 --> */
    .HomePageone-content{
        margin:0.5rem 0rem;
        border:1px solid #ddd;
        border-radius:7px;
        text-align:left;
    }
    .HomePageone-content>div:nth-child(1){       width:100%;
        font:700 1.5rem/2rem "正楷" ;
        max-height:4rem;
        color:black;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-top:0.2rem;
        }
    .HomePageone-content>div:nth-child(2){
        display:flex;
        justify-content:space-between;
    }
    .HomePageone-content>div:nth-child(2)>img{  
        width:32vw;
        height:15vh;
         margin:0.5rem 0rem;
    }
    .HomePageone-content>div:nth-child(2)>:first-child{
        border-radius:7px 0px 0px 7px;
        
    }
     .HomePageone-content>div:nth-child(2)>:last-child{
        border-radius:0px 7px 7px 0px;
        
    }
</style>