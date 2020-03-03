<template>
        <!-- 置顶部分 -->
        <div class="HomePageone-Stick1" @click="router">
          <!-- <router-link :to="{ path: '/HomePagetwo', query: { id:toup1.xcontent}}" >   -->
               <div class="HomePageone-Stick-2">
                   
                {{toup1.xtitle}}
            </div>
            <div class="HomePageone-Stick-3">
                <span>置顶</span>
                <!-- 作者 -->
                <span>
                    {{toup1.xauthor}}
                    </span>
                <!-- 评论个数 -->
                <span>
                    {{toup1.xpraise}}
                </span>
         </div>
          <!-- </router-link> -->
        </div>
   

</template>
<script>
export default {
    props:['toup'],
    data(){
        return {
            toup1:'',
        }
    },
    methods:{
        
        // 跳转并带参数
        router(){
            this.$router.push({path:'/HomePagetwo',query:{xcontent:this.toup1.xcontent,xtitle:this.toup1.xtitle,xauthor:this.toup1.xauthor,xpicture:this.toup1.xpicture}});
        }
    },
    watch:{
        toup(){
            this.toup1=this.toup;
        }
    }
}
</script>
<style scoped >

    .HomePageone-Stick1{
      
       padding-bottom:0.3em;
       border-radius:7px;
       text-align:left;
    }
     .HomePageone-Stick1:after{
         content:"";
         display:block;
         clear:both;
     }
    .HomePageone-Stick-2{
        font:700 1.6rem/1.5rem "正楷" ;
        max-height:2.9rem;
       color:black;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .HomePageone-Stick-3{
       margin-top:0.6rem;
        height:1.5rem;
    }
    .HomePageone-Stick-3>span{
        margin:0.5rem 0rem 0.2rem 0.5rem;
        font-family:  sans-serif ;

    }
    .HomePageone-Stick-3>span:not(:nth-child(1)){
        color:#999;
    }
    .HomePageone-Stick-3>span:first-child{
        color:#007722;
    }
</style>