export const applyMixin = (Vue)=>{
    Vue.mixin({
      beforeCreate:vueInit
    })
}



function vueInit(){
  const options = this.$options;
  if(options.store){
    //根实例
    this.$store = options.store
  }else if(options.parent && options.parent.$store){
    //子组件
    this.$store = options.parent.$store
  }
}

