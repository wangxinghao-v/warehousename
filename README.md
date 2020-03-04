此项目是基于腾讯新闻appui开发的，里面有很多技巧和有趣的设置，比如在不涉及后端的情况下，前端怎样解决跨域，
在比如请求开放接口时怎样解决跨域，还自定义一个公用文件定义方法和数据模仿vuex，
![image](https://github.com/wangxinghao-v/warehousename/blob/master/myxiaogaoserve/public/index.png)
![image](https://github.com/wangxinghao-v/warehousename/blob/master/myxiaogaoserve/public/index2.png)
详情页由于每一条新闻的ui不一，所以必须都定义为自定义组件引入使用，引入一组组件然后在循环这个板宽，这也要求了从后台获取到的数据必须是个多维数组，

在数据交互的多样性是上，由于Vue的天生都是版块与版块之间的关系，又由于解决代码重复所以也就意味着各组件间的通信必须发达，在官方提供的vuex和自定义属性传参外我还制定了个全局js文件bus，所起到的功能就是在全局范围内所有组件都可以调用的一些自定义的方法，其做法就是定义一个bus.js文件import Vue from "vue"   export default new Vue({bus:function (){console.log("这是一个自定义的bus方法")}})。 调用bus方法：this.$bus.$emit("myself",this.selfts);
![image](https://github.com/wangxinghao-v/warehousename/blob/master/myxiaogaoserve/public/bus.jpg)
除此之外我在在电影界面请求猫眼的api时，浏览报一个跨域的错误，以前我们在解决时都可以实际操作后台代码，但请求猫眼显然不能

