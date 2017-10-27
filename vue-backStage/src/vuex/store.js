import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    //定义状态
    state:{
        author:'混世魔王程咬金'
    },
    mutations:{
        newAuthor(state,msg){
            state.author = msg;
        }
    }
})

export default store