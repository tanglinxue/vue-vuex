<template>
  <div id="app">
    我的年龄是:{{$store.state.age}}<br>
    ta的年龄是:{{$store.state.a}}<br>
    珠峰的年龄:{{$store.getters.getAge}}<br>
   <button @click='$store.dispatch("changeAge",15)'>同步更新状态</button>
    <!-- 
    
    
    <button @click='$store.dispatch("changeAge",5)'>异步更新状态</button> -->
  </div>
</template>


