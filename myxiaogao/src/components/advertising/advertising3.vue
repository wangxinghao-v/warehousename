<template>
<!-- 主题内容占位 -->
    <div>
         <div class="HomePageone-content">
           <div >
               创界雪乎兰限量版 领潮上市
           </div>
           <div>
               <img src="../../assets/advertising/advertising3.jpg" />
                <img src="../../assets/advertising/advertising3-1.jpg" />
                <img src="../../assets/advertising/advertising3-2.jpg" />
           </div>
          <div class="adertiding2-button">
            <div class="adertiding2-adertiding2">
                广告
            </div>
            <div class="">东风本田</div>
        </div>
       </div>
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
 .adertiding2-button:after{
        content:"";
        display:block;
        clear:both;
        height:1vh;
    } 
    .adertiding2-button>div{
        float:left
    }
    .adertiding2-adertiding2{
        margin:0rem 0.3rem; 
        width:2.1rem;
        height:1.1rem;
        border:1px solid #37a;
        border-radius:3px;
        color:#37a;}
</style>