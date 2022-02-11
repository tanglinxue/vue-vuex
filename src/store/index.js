import Vue from 'vue'
import Vuex from '../vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age:28,
    a:1
  },
  getters:{
    getAge(state){
      console.log('getter执行')
      return state.age+10
    }
  },
  mutations: {
    changeAge(state,payload){
      state.age += payload
    }
  },
  actions: {
    changeAge({commit},payload){
      setTimeout(()=>{
        commit('changeAge',payload)
      },3000)
    }
  },
  modules: {
  }
})
