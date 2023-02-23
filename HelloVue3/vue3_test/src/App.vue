<template>
  <h2>当前求和为:{{ sum }}</h2>
  
<button @click="sum++">点我+1</button>
<button @click="person.age++"></button>
</template>

<script>

  // import console from 'console';
  import { watch, ref, reactive } from 'vue';

  export default {
    name: 'App',
    // watch:{
    //   sum(newValue, oldValue){
    //     console.log('sum的值变化了',newValue, oldValue);
    //   }
    // }, 
  
    setup(){
      let sum = ref(0)
      let person = ref({
        name:'aa',
        age:9
      })
      //监视reactive
      watch(person.value, (newValue, oldValue)=>{
        console.log('person变化了', newValue, oldValue);
      })
      return {
        sum,person
      }
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
