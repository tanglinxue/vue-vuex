import {Vue} from './install'
import {forEach} from './util'
class Store{
  constructor(options){
    let {state,mutation,actions,getters} = options;

    this.getters = {}
    const computed = {}

 

    forEach(getters,(fn,key)=>{
      computed[key] = ()=>fn(this.state)//为了保证参数是state
      //当我们去getters上取值，需要对computed取值
      Object.defineProperty(this.getters,key,{
        get:()=>this._vm[key]
      })
    })
    
    //这个状态在页面渲染时需要收集对应的渲染watcher,这样状态更新才会更新视图
    this._vm = new Vue({
      data:{//$符号开头的数据不会被挂载到实例上，但是会挂载到当前的_data上，减少了一次代理
        $$state:state
      },
      computed
    })
  }
  //类的属性访问器
  get state(){
    // 依赖于vue的响应式原理
    return this._vm._data.$$state
  }
}

export default Store
