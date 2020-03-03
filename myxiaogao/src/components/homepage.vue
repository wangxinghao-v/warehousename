<template>
<div>
    <mt-tab-container v-model="active">
        <mt-tab-container-item id="t1">
            首页
        </mt-tab-container-item>
        <mt-tab-container-item id="t2">
            <div>新上映||旧经典</div>
         <div class="t2-fiath">
            <div class="t2-left-picture">
                
            </div>
            <div class="t2-right-picture">

            </div>
         </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="t3">
            订单
        </mt-tab-container-item>
        <mt-tab-container-item id="t4">
            我的
        </mt-tab-container-item>
        
    </mt-tab-container>
 <mt-tabbar class="mint-tabbar" fixed v-model="active">
    <!-- 需求：当用户点击 -->
    <!-- slot="icon"名字叫插槽把图片后的文字调节到图片的正下方 -->
    <mt-tab-item  id="t1" >
      <img slot="icon" src="../assets/gunggao.jpg">首页
    </mt-tab-item>
    <mt-tab-item id="t2" >
      <img slot="icon" src="../assets/gunggao.jpg">电影
    </mt-tab-item>
    <mt-tab-item id="t3">
      <img slot="icon" src="../assets/gunggao.jpg">订单
    </mt-tab-item>
    <mt-tab-item id="t4">
      <img slot="icon" src="../assets/gunggao.jpg">我的
    </mt-tab-item>
  </mt-tabbar>

</div>
</template>
<script>
export default {
    name: 'homepage',
    data(){
    return {
      
        active:"t1"
      }
    },
    created () {
      
       var url= this.HOST;
        this.axios.get(url).then(result=>{
        console.log(result.data);
  })},
     methods:{
        dsd(){
        this.$messagebox.alert("提示的内容","确定");
    },
    tav(e){
        console.log(e.value)
    }
   },
   watch:{
    
        
   
}
}

</script>
<style>
    /* 电影 */
    .t2-fiath{
        background:#000000;
        width:100%;
        padding:2px;
    }
    .t2-fiath:after{
        content:"";
        clear:both;
        display:block;
       
    }
    .t2-left-picture{
       background:#373743;
        float:left;
        width:59%;
        height:150px;
        border-right:2px solid #000000 ;
    }
    .t2-right-picture{
        float:left;
        background:#373743;
        width:39%;
        height:150px;
    }
</style>
