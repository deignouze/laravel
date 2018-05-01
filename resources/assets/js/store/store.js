import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        counter:1,
        myvalue:1,
    },

    getters:{
        doubleCounter:state=>{
            return state.counter*2;
        },
        myvalue:state=>{
            return state.myvalue;
        },
    },
    mutations:{
        increment:(state,payload)=>{
            return state.counter+=payload;
        },
        decrement:state=>{
            return state.counter--;
        },

        updateValue:(state,myvalue)=>{
            state.myvalue=myvalue*2;
            console.log(state.myvalue)
        },
    },

    actions:{
        increment:({commit},payload)=>{
            setTimeout(()=>
            commit("increment",payload)
            ,1000)
        },
        decrement:({commit})=>{
            commit("decrement");
        },

        updateValue:({commit},payload)=>{
            commit("updateValue",payload);
        },
    },
})