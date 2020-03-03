<template>
    <div class="comment-say">
    <!-- 评论 -->
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
        <div class="conment-top" >全部短评····<span style="color:#000;">
             (<span style="color:#37a;" >{{fortext.length}}</span>)
            </span>
        </div>
        <div v-for="(val,i) of fortext" :key="i" class="conment-conter">
            <div class="conment-conter-left">
                <!-- 头像先空着要的话xcomment表加一列 -->
                <img src="../assets/bxqy.jpg">
            </div>
            <div class="conment-conter-right">
                <div style="height:2rem">
                    <!-- 网名 -->
                    <span class="conment-conter-span1" >布拉万</span>
                    <!-- 评论时间 -->
                    <span class="conment-conter-span2">
                        {{val.xtime}}
                    </span>
                    <div class="conment-conter-span3">
                        <!-- 获赞的个数 -->
                        {{fortext[i].likee}}
                    <span  v-on:click="active1(val.xid, val.likee,i,$event)" class="iconfont icon-zan">
                    </span>
                    </div>
                </div>
                <div class="conment-conter-text" :style=height2 >
                    <!-- 文本部分 -->
                   <span>
                        {{val.comment}}
                   </span>
              
                   <span class="all">···全部</span>
                </div>
            </div>
             <button @click=" forcomment">dianfgjlkdjfkdkfji</button>
        </div>
       
    </div> 
</template>
<script>
let that;
//import Comment1 from './Comment1'
export default {
    // components:{
    //     "my-Comment1":Comment1
    // },
    props:["texment"],
    data(){ 
        return {
            //要遍历的部分
            fortext:[],
             message:'',
            iconf:"color:red;",
            //点赞图标的默认值
            active:true,
            //动态显示评论的长度
             text3:[],
             //默认值
             active2:[],
            // "填充文本根据文本的长度计算填充的长度，假文：记得设计费健康的减肥了ADSL发件埃里克jijidj及家属楼点击发送了快递解放路啥哩肯德基弗兰卡剑荡四方垃圾的说法来看jds接口连接阿里的房间里卡多设计费拉决胜巅峰了空间啊施蒂利克积分阿斯jijij机甲大师东方闪电急急急晋级赛蒂芬近里打几分拉开距离",
            text4:"",//经过处理后的填充文
            height2:"",
            i:0
        }

    },
    beforeMount(){
        //that=this;
    },
     created() {
        
    this.forcomment();
     },
 beforeMount(){
    // console.log("homepageone组件挂载前...")
     
  },
  mounted(){// console.log("homepageone组件挂载后..."
  },
  beforeUpdate(){
    // console.log("更新homepageone组件前...")
  },
  updated(){
    // console.log("更新homepageone组件后...")
     },
  beforeDestroy(){
    // console.log("销毁homepageone组件前...")
  },
  destroyed(){
    // console.log("销毁homepageone组件后...")
  },
  //过滤属性从数据库中得到的值我不满意
    //  filters:{
    //     setstr(value,height2) {
    //         console.log("锅炉器",value);
    //     //  判断字符串的高度好让点击全部显示
    //       var aa=value.length;
    //       var setvalu="";
    //       //console.log(aa);
    //       if(aa>130){
    //         height2="height:13vh;";
    //         setvalu=value.slice(0,130);
    //         return sevalu;
    //       }else{
    //           height2="";
    //          return value;
    //       };
    // }
    // },
    methods:{
        //获取遍历评论的个数
        forcomment(){
            this.axios.get('http://127.0.0.1:3000/forcomment',{params:{id:this.texment}}).then(res=>{
               // console.log(res.data,'循环查询的id');
                this.fortext=res.data.reverse();
              }).catch(err=>{
                console.log("forcomment请求数据有误");
              })
        

        },
        //获取动态时间函数
         getteim(state){
            //定义时间
            var now=new Date()
            //获取当前时间
            var year=now.getFullYear();
            //获取月(0是一月)
            var month=now.getMonth()+1;
            //获取日
            var day=now.getDate();
            var time=now.toLocaleTimeString().slice(2);
        var settime=`${year}-${month}-${day} ${time}`;
            //将时间放到页面上
            return settime;
        },
        funs(){
            console.log(this.getteim());
        },
         //发表提交按钮
        //这个地方评论了之后还待吧父组件的方法还待传回来，做刷新用
        publish(){
            var str=this.message;
            var textment=this.texment;
            var xtime=this.getteim();
           
            // this.axios({
            //         method: 'post',
            //         url:'http://127.0.0.1:3000/Comment',
            //         data:obj
            //     }).then((res)=>{
            //         console.log(res)
            //     });
              this.axios.post('http://127.0.0.1:3000/Comment',{params:{str,textment,xtime}}).then(res=>{
                    if(res.data.code==-1){
                            this.forcomment();
                            this.$toast("评轮成功");
                             this.message="";
                    }else{
                    }
              }).catch(err=>{
                 this.$toast("评轮失败"); 
              })
        },
        //图标的点击方法注：不考虑防抖节流麻烦
        active1(id,lek,i,e){
            var a=e.target;
            if(a.style.color==="red"){
                 this.fortext[i].likee-=1;
                lek=-1;
               a.style.color="#2c4767";
                  this.axios.post('http://127.0.0.1:3000/like',{params:{id,ii:-1,lek}}).then(res=>{
                    res.data.code=-1?
                 this.$toast({message: '已取消',}):null;
                }).catch(err=>{
                 this.$toast("取消有误"); 
              })
            }else{
                lek+=1;
                this.active=false;
                a.style.color="red";
                this.axios.post('http://127.0.0.1:3000/like',{params:{id,ii:1,lek}}).then(res=>{
                    this.fortext[i].likee+=1;
                 this.$toast({message: '点赞成功',});
                }).catch(err=>{
                 this.$toast("点赞有误"); 
              })
               
                 
            }
        },
       
    }
}


</script>
<style scoped >

 .conmment-say1{
      border:2px solid #cbd2d8;
      margin:0.5rem 0rem;
    }

 .comment-say>.conment-top{
     text-align:left;
     color:#007722;
     font:700 1rem/1rem "宋体";
 }
 .conment-conter{
     padding:0.4rem 0rem;
     border-bottom:1px solid #bbb;
 }
 .conment-conter::after{    
        content: "";
        display:block;
        clear:both;   
        }  
 .conment-conter-left{
     float:left;
     width:15%;
     height:100%;
 }
 .conment-conter-left>img{
     width: 2.5rem;
     height:2.5rem;
     border-radius:50%;
     

 }
 .conment-conter-right{
     float:left;
     width:83%;
     height:20vh;
    
 }
 .conment-conter-span1{
     float:left;
     color:#37a;
     font:700 1rem/2rem "宋体";

 }
 .conment-conter-span2{
     float:left;
    color:#aaaaaa;
    font:400 0.6rem/2rem "微软雅黑";
    margin-left:0.2rem;

 }
 .conment-conter-span3{
     float:right;
     font-size:0.8rem;
     
 }
 /*.van-icon-good-job:before{
     content:"\F069";
     
     }*/
     /*文本显示区*/
     .conment-conter-text{
         text-indent:1rem;
         text-align:left;
         overflow: hidden;/*超出部分隐藏*/
         height:13vh;
         
     }
     .all{
         color:#37a;
     }

</style>