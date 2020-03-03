<template>
    <div @click="setfun" class="advertising2" >
        <h2>{{bigimg1.xtitle}}</h2>
        <div>
            <img style="border-radius:7px;; width:100%; height:100%" :src="bigimg1.ximg" >
        </div>
        <div class="adertiding2-button">
            <!-- 作者 -->
            <div class="adertiding2-adertiding2">
               {{bigimg1.xauthor}}
            </div>
            <!-- 评论 -->
            <div class="">{{bigimg1.xpraise}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props:["bigimg"],
    data(){
        return {
            bigimg1:{}
        }
    },
    methods:{
         setfun(){
            this.$emit("getfunction");
             this.$router.push({path:'/HomePagetwo',query:{xcontent:this.bigimg1.xcontent,xtitle:this.bigimg1.xtitle,xauthor:this.bigimg1.xauthor,xpicture:this.bigimg1.xpicture}});
        },
    },
    watch:{
        bigimg(){
            this.bigimg1=this.bigimg;
            //console.log(this.bigimg,56)
        }
  
   
    }
    
}
</script>
<style scoped>
    .advertising2{
        margin:0.5rem 0rem;
        padding:0.5rem 0rem;
        border:1px solid #dddddd;
         border-radius:7px;
         text-align:center;
    }
     .advertising2>h2{
         text-align:left;
         max-height:7vh;
         font:700  1.5rem/1.6rem "行楷";
         overflow:hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
     }
    .advertising2>div:nth-child(2){
        height:30vh;
        
        margin:0.5rem 0rem;
        border-radius:7px;
    }
      .adertiding2-button:after{
        content:"";
        display:block;
        clear:both;
    
    } 
    .adertiding2-button>div{
        float:left
    }
    .adertiding2-adertiding2{
        margin:0rem 0.5rem;  
      }
</style>