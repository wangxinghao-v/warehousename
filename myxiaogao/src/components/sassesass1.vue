<template>
    <div>
        子组件
        {{chend}}<br />
        <br>
        
        <br>
         <h1><button @click="del">调用父组件里的函数</button></h1>
         <!-- 没研究出来 -->
         <!-- <slot name="task">{{}}</slot>  -->
         <br>
         
         
         <br>
             <h1><button @click="add">点击触发父元素绑定在bus <br>上的函数并向它传参</button></h1>
         
    </div>
</template>
<script>

export default {
      props:['chend'],
     data(){
        return {
           img:"我是子组件中的值",
            selfts:"我是向bus上传的一个参数",
        }
    },
     created () {
         //router-link跳转接参
         console.log(this.$route.query);
         //js跳转接参
        // console.log(this.$route.query,"js路由跳转传参");
       
     },
    methods:{
        add(){
            //触发定义在父元素上的函数也就是bus上谁都可以触发的函数
            this.$bus.$emit("myself",this.selfts);
            
        },
        del(){
            console.log(0);
            this.$emit("del",this.img);
        }
    }
}
</script>
<style >

</style>