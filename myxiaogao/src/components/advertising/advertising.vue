<template>
    <div>
         <div class="cd" @click="dfs">
      <router-link to="/Helloworld"  class="cd-chid">
        {{time}}
      </router-link>
    </div>
    </div>
    
</template>

<script>
export default {
  data(){
    return {
      time:5,
    }
  },
  created(){
        //调用加载商品的函数列表
        this.dfs();},
methods:{
  //5秒钟关闭一个网页
  dfs(){ 
      var a=this.time;   
   setInterval(()=>{
       a--;
       this.time=a
       if(a==0){
        this.$router.push('/Helloworld').catch(err => { console.log(err) })
    }
        ;},1000)
    //获取页面的宽高
    //var oWidth = window.screen.height;
    //console.log(oWidth);
  }
},
  watch:{
     
    }
   
}

</script>
<style>
.cd{
  width:100vw; height:100vh;
  background:url(../../assets/advertising/gunggao.jpg) no-repeat;
  background-size:100vw 100vh;
}
.cd-chid{
  display:block;
  width:50px;height:20px;
  background:#5a5a5a;
  float:right;
  border-radius:50px;
  margin:30px 20px 0px 0px;
  text-align:center;
  color:#FFF;
}
</style>
