<template>
  <h1></h1>
  <h2>姓名{{name}}</h2>
  <h2>年龄{{age}}</h2>
  <button @click="sayHello">点击</button>

</template>

<script>

  import { h } from 'vue';

  export default {
    name: 'App',
    // components: {
    //   HelloWorld
    // }
    setup(){
      let name = "aa";
      let age = 18;
      function sayHello() {
        alert(`我叫${'name'},我${age}岁了`)
      }
      //返回对象
      // return{
      //   name,
      //   age,
      //   sayHello
      // }
      //返回渲染函数
      return ()=>{return h('h1', '123')};
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
