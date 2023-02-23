//引入vue3工厂函数，无需new
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

console.log('@@@@', app);
app.mount('#app');
// createApp(App).mount('#app')

// setTimeout(()=>{
//     app.unmount('app')
// }, 1000)