<template>
<!-- 父组件 -->
    <div>
      <div style="height:10vh">
          子组件调用父组件的函数，父组件向子组件传值
           <h5> <sassesass1 :chend="des" @del="desdd"/></h5>
      </div>
       <div style="height:10vh; border:1px solid red;">
          <h2> <button @click="goto">点击跳转js带参</button></h2>
       </div>
       <div style="height:10vh; border:1px solid red;">
          <h2> <router-link :to="{ path: '/sassesass1', query:{ id: 1111}}">router跳转带参</router-link></h2>
       </div>
       <div style="height:15vh; border:1px solid red;">
           <!-- 没研究出来 -->
           插槽
           <sassesass1>
                <template slot="task"></template>
           </sassesass1>
       </div>
       
       
    </div>
</template>
<script>
import sassesass1 from './sassesass1.vue'
export default {
    components:{
      sassesass1
     
   },
    data(){
        return {
            des:"父组件传的值",
            rot:"路由传参",
            jss:"js路由传参",
            task:"插槽传值只用于显示",
            selfs:"向bus上定义一个变量看看能不能全局用",
        }
    },
    created(){
        //向公用bus组件上注入一个自己定义的一个函数,bus不同于vuex的地方就是vuex上定义好的变量和函数全局都可用可获取可存放，bus只能向上放一个变量不能获取
        this.$bus.$on("myself",this.self.bind(this))
    },
    methods:{
       
        //自定义的一个函数
        self(e){
            console.log("我是自定义的一个函数",'我是调用者传过来的参：'+e);
        },
        goto(){
           
            this.$router.push({path:'/sassesass1',query:{id:this.jss}});
        },
        desdd(e){
            console.log("我是父组件的函数",e)
        }
    }
}
</script>
<style >

</style>