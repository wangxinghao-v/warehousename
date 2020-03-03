<template>
     <!-- 提交评论 -->
        <div class="conmment-say1">
            <div class="conmment-pinglun">
                <van-cell-group>
                <van-field
                    v-model="message"
                    rows="0"
                    autosize
                    label="留言"
                    type="textarea"
                    maxlength="200"
                    placeholder="请输入留言"
                    show-word-limit
                />
             </van-cell-group>
            </div>
            <div  style="text-align:right;">
                 <van-button @click="publish" size="large" type="primary" color="#e84852">发布</van-button>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return {
            message:'',
        }
    },
    methods:{
        //发表提交按钮
        //这个地方评论了之后还待吧父组件的方法还待传回来，做刷新用
        publish(){
            var obj=this.message;
            //   this.axios.get('http://127.0.0.1:3000/Comment1',{params:obj}).then(res=>{
            //     this.$toast("评论成功");
            //   }).catch(err=>{
            //      this.$toast("评轮失败"); 
            //   })
        }
    }
}
</script>
<style scoped>
    .conmment-say1{
      border:2px solid #cbd2d8;
      margin:0.5rem 0rem;
    }

</style>