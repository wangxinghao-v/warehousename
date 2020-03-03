import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        sun:0,
       
    },
    getters:{
        getsun(state){
            return state.sun;
        },
       
    },
    //同步的方式来修改store中的数据
    mutations:{

        setsun(state,setvaule){
            state.sun=0;
            state.sun=setvaule;
        }
    },
    //提交异步请求
    actions:{},
    
    modules:{}
})