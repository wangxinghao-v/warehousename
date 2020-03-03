<template>
    <div class="t2-child-newmove">
             <div class="t2-newmove-shwtime">
                    <ul class="t2-newmove-header">
                        <li>影片</li>
                        <li>票房占比</li>
                        <li>排片场次</li>
                        <li>排片占比</li>
                        <li>场均人次</li>
                        <li>上座率</li>
                        <i>(点击优先展示)</i>
                    </ul>                     
             </div>
             <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
             <div style="overflow-y:scroll; height:45vh;">
             <div @click="indexfunc(i,tem)" v-for="(tem,i) of value1" :key="i" class="t2-newmove-shwtime2" >
                 <ul class="t2-newmove-circulation">
                     <!-- 下标 -->
                        <i class="t2-newmove-i">{{i+1}}</i>
                        <!-- 片名 -->
                        <li>{{tem.movieName}}</li>
                        <!-- 票房占比 -->
                        <li>{{tem.boxRate}}</li>
                        <!-- 排片场次 -->   
                        <li>{{tem.showInfo}}</li>
                        <!-- 排片占比 -->
                        <li>{{tem.showRate}}</li>
                        <!-- 场均人次 -->
                        <li>{{tem.avgShowView}}</li>
                        <!-- 上座率 -->
                        <li>{{tem.avgSeatView}}</li>
                        
                        <i class="t2-newmove-i1">
                            <van-rate class="t2-newmove-i1" size=15px v-model="value" :count="1" /><h6 class="t2-newmove-i1">
                                {{tem.releaseInfo
}}&emsp;
{{tem.sumBoxInfo}}</h6></i>
                    </ul>
             </div>
             </div>
        </van-pull-refresh>
    </div>
</template>
<script>
export default {
    props:["ranvlue"],
    name:'ranking',
    data(){
        return{
            //下拉刷新
            count: 0,
            isLoading: false,


            value:0,
            value1:[],
            //点击时面板要用的值
            
        }
    },
    created (){
        //console.log("我是ranking的钩子函数");
    },
    methods:{
         //下拉下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
        //向父组上传个值
        indexfunc(i,tem){
            this.$emit('childvaul',i,tem);
        }
    },
     watch:{
         ranvlue(){
             this.value1=this.ranvlue;
        
         }
     }
}
</script>
<style scoped >
     /*循环展示部分*/
     .t2-child-newmove{
        background:#000;
    }
    /*表头*/ 
    .t2-newmove-shwtime{
      width:100vw;
      height:10vh;
      background:#373743;
      border-radius:10px 10px 0 0;
    }
    .t2-newmove-header>li{
        width:15vw;
        float:left;
        color:#fff;
        font-size:0.1rem;
        margin-left:0.3rem;
        line-height:3rem;
    }
    .t2-newmove-header>i{
        float:left;
        color:#fff;
    }
    /*循环生成部分*/
    .t2-newmove-circulation{
      width:100vw;
      height:8vh;
      background:#3f3f4d;
      
    }
    .t2-newmove-circulation>li{
        width:14vw;
        float:left;
        color:#fff;
        margin-right:5px;
        height:4vh;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        line-height:6vh;
        margin-bottom:1vh;
    }
    .t2-newmove-i{
        float:left;
        color:#fff;
        width:5vw;
        height:3vh;
        line-height:6vh;
    }
    .t2-newmove-i1{
        float:left;
       
        color:#fff;
    }
   
    
</style>

