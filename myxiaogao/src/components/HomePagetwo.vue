<template>
    <div class="homepagetwo">
        <div class="hptwo-pageheder">
            <router-link  to="/HelloWorld" class="
            iconfont icon-fanhui">
            </router-link>
        </div>
        <div class="htptwo-index"> 
         <div class="hptwo-tetle">
           {{$route.query.xtitle}}
         </div>
         <!-- 作者 -->
         <div class="tptwo-zuohe">
            {{$route.query.xauthor}}
         </div>
         <!-- <div class="tptwo-text" occlick="tab()" v-for="(val,i) of arr" :key="i">
             {{val}}
           <img v-bind:src="imageList[i]" />  
         </div> -->
         
         <div class="tptwo-text" v-html="$route.query.xcontent">

         </div>
        </div>
        <!-- 广告占位 -->
        <my-advertising2 />
        <!-- 评论占位 -->
       
        <my-comment :texment="$route.query.xpicture"/>
    </div>
</template>
<script>
import Comment from './Comment.vue';
import advertising2 from './advertising/advertising2';

export default {
    components:{
        "my-comment":Comment,
        "my-advertising2":advertising2,
    },
    data(){
        return {
            imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
          
            //  ddd:require('../assets/icnfon.jpg'),
            teee:`1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium minima optio est doloribus officia ut labore dolorum a corrupti odio placeat soluta tempore, at, rem neque voluptas! Doloremque, dolorum facilis.<>
        2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium minima optio est doloribus officia ut labore dolorum a corrupti odio placeat soluta tempore, at, rem neque voluptas! Doloremque, dolorum 你好啊世界？ facilis.<img style="width:100%;  margin:1rem 0rem;" src="http://127.0.0.1:3000/assets/choiceness/1112.jpg" alt="">
        3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium minima optio est doloribus officia ut labore dolorum a corrupti odio placeat soluta tempore, at, rem neque voluptas! Doloremque, dolorum facilis.<>
        3你好几家地方叫几点睡.<><img style="width:100%; margin:1rem 0rem; " src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium minima optio est doloribus officia ut labore dolorum a corrupti odio placeat soluta tempore, at, rem neque voluptas! Doloremque, dolorum facilis.<>
        2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium minima optio est doloribus officia ut labore dolorum a corrupti odio placeat soluta tempore, at, rem neque voluptas! Doloremque, dolorum 你好啊世界？ facilis.<>
        3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium minima optio est doloribus officia ut labore dolorum a corrupti odio placeat soluta tempore, at, rem neque voluptas! Doloremque, dolorum facilis.<>
        3你好几家地方叫几点睡.<>
        `,
        arr:[],   
        }
    },
    created(){
      
       // this.filt();
        //console.log(this.imgSrc)
        // for(var i; i<this.imgs.length; i++){
        //     this.ddd[i]=require(this.imgs[i]);
        // }
      // console.log(this.$route.query.xtitle)
    /*在这可以发送一个广告的axis，广告见个表，以数组的形式返回来，然后Math.rnden不固定抽取下标这样就可以动态的显示广告的页面*/
    },
    methods:{
        //过滤函数请求的数据过滤
        filt(){
        // var aa=[];
        var i=0;
        var ser=0;
        for(var ii=0; ii<=1000; ii++){
          ser= this.teee.indexOf('<>',i);
         this.arr[ii]=this.teee.slice(i,ser);
            if(this.teee.indexOf('<>',ser+2)>=0){ 
               console.log(this.teee.indexOf('<>',ser+2));
                i=ser+2;
          }else{break;}
        }
        }
    }
}




</script>
<style scoped>
    .homepagetwo{
        text-align:left;
    }
    .iconfont{
        line-height:3rem;
        margin-left:1rem;
    }
    /* 页头 */
    .hptwo-pageheder{
        height:6vh;
        background:#d5efec8c;
        border-radius:0rem 0rem 0.5rem 0.5rem;
        
    }   
    .htptwo-index{font-size:1rem;}
    .hptwo-tetle{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-size:1.5rem;
        line-height:1.7rem;
        max-height:3.5rem;
        overflow: hidden;
        text-align:left;
        text-indent:1rem;
        margin:0.5rem 0rem;
    }
    .tptwo-zuohe{
        margin:0.5rem 0rem;
    }
    .tptwo-text{
        text-indent:1rem;
        padding:0.5rem;
    }
   
</style>