import Vue from 'vue'
import Vuex from '@/vuex'
console.log(Vuex)
Vue.use(Vuex)

export default new Vuex.Store({
  state: { // state = > data
    name: 'zhufeng',
    age: 12
  },
  mutations: { // method  commit 同步更改状态
      changeAge(state, payload) {
          state.age += payload
      }
  },
  actions: { // 异步操作 调用api接口 dispatch， 多次commit mutation  
      changeAge({ commit }, payload) {
          setTimeout(() => {
              commit('changeAge', payload);
          }, 1000);
      }
  },
  getters:{
    myAge(state){
      console.log('ok')
      return state.age+10
    }
  }
})
