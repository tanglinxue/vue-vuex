<template>
  <div id="app">
    学校的年龄{{ $store.state.name }} 
    我的年龄是 {{ $store.state.age }}

    我的年龄是 {{ $store.getters.myAge }}
     <button @click="$store.state.age++">更改年龄</button>
    <!-- 珠峰的年龄:{{$store.getters.getAge}}<br>
   <button @click='$store.dispatch("changeAge",15)'>同步更新状态</button> -->
    <!-- <button @click='$store.dispatch("changeAge",5)'>异步更新状态</button> -->
  </div>
</template>

<script>
export default {
  name:'app',
  mounted(){
    console.log(this.$store)
  }
}
</script>


