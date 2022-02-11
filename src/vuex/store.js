import { applyMixin } from "./mixin";
import {forEach} from './util'
let Vue;
class Store{
  constructor(options){
    let state = options.state
    this.getters = {}
    const computed = {}
    forEach(options.getters,(fn,key)=>{
      computed[key] = () => { //通过计算属性实现懒加载
        return fn(this.state)
      }
      Object.defineProperty(this.getters,key,{
        get:()=>this._vm[key]
      })
    })
    //vue中定义数据，属性名是有特点的 $xxx命名的，他不会被代理到vue实例上
    this._vm = new Vue({
      data:{
        $$state:state
      },
      computed 
    })

    //发布订阅模式，将用户定义的mutation和action先保存起来，稍后当调用commit时，就找订阅的mutation方法，调用dispatch就找对应的action方法
    this._mutations = {}
    forEach(options.mutations,(fn,type)=>{
      this._mutations[type] = (payload)=>fn.call(this,this.state,payload)
    })

    this._actions = {}
    forEach(options.actions,(fn,type)=>{
      this._actions[type] = (payload)=>fn.call(this,this,payload)
    })
  }

  commit = (type,payload)=>{
    this._mutations[type](payload)
  }

  dispatch = (type,payload)=>{
    this._actions[type](payload)
  }


  // 类的属性访问器，当用户去这个实例上取state属性时，会执行此方法
  get state(){
    return this._vm._data.$$state
  }
}

const install = (_Vue)=>{
  Vue = _Vue
  console.log('install')
  applyMixin(Vue)
}

export {
  Store,
  install
}
