<template>
    <div class="oldmovie">
        <div class="oldmvie-herder">
            <h1>经典100部佳作</h1>
        </div>
        <div style="overflow-y:scroll; height:78vh;">
       <div v-for="(vlue,i) of movie" :key="i" class="oldmovie-one">
           <div class="oldmovie-one-1">
               <div class="oldmovie-one-1-1">
                   <img :src="vlue.mimg" >
               </div>
               <div class="oldmovie-one-1-2">
                   <div class="oldmovie-one-left">
                       <h2>导演:</h2>
                       <h2>主演:</h2>
                       <h2>类型:</h2>
                       <h2>国家:</h2>
                   </div>
                   <div class="oldmovie-one-right">
                    <h3>{{vlue.mdirector}}跟多..</h3>
                   <h3>{{vlue.mprotagonist}}</h3>
                   <h3>{{vlue.mtype}}</h3>
                   <h3>{{vlue.msite}}</h3>
                   </div>
                   <van-button style="width:50%;  height:20%; background-color:#272735; border:1px solid #ddd" size=small type="primary" >点击详情</van-button>
               </div>
           </div>
           
       </div>
       </div>
    </div>
</template>
<script>
export default {
    name:'Oldclassic',
    data(){
        return {
            movie:null,
        }
    },
    created(){
        //一百部佳作
  this.messagemovie();
    },
    methods:{
        //一百部佳作

  messagemovie(){
    this.axios.get("http://127.0.0.1:3000/messagemovie").then(result=>{
        this.movie=result.data;
    }).catch(err=>{
      console.log("messagemovie有问题");
    })
  },
    }
}
</script>
<style scoped>
 .oldmovie:after{
        content:"";
        display:none;
        clear:both;

    }
    .oldmvie-herder{
        width:100vw;
        height:8vh;
        background:#272735;
        color:#aaa;
        vertical-align:middle;
}
.oldmvie-herder>h1{
        height:2rem;
        line-height:3rem
}
    .oldmovie-one{
        width:100vw;
        border-bottom:1px solid #000;
    }
   
    .oldmovie-one-1{
        width:100%;
        
        height:25vh;
        background:#272735;
    }
    .oldmovie-one-1-1{
        float:left;
        height:97%;
        width:45%;
       margin:0.1rem
    }
    .oldmovie-one-1-1>img{
        width:100%;
        height:100%;
    }
    .oldmovie-one-1-2{
        width:53%;
        height:97%;
       color:#aaa;
        float:left;
        padding:1px;
        margin:2px;
        box-sizing:border-box;
    }
    .oldmovie-one-left{
        width:32%;
        height:76%;
        float:left;
    }
     .oldmovie-one-left h2,h3{
         margin-top:5px; 
     }
    .oldmovie-one-right{
        width:67%;
        float:left;
        height:76%;
    }
    .oldmovie-one-right>h3{
        text-align:left;
        overflow:hidden;
        height:1.1rem;
    }
</style>


