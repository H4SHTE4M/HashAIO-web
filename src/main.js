import { createApp } from 'vue';
import App from './App.vue'; // 引入根组件 App.vue
import axios from 'axios'; // 如果需要全局使用 axios，可以在这里引入
import ElementPlus from 'element-plus'; // 引入 Element Plus
import 'element-plus/dist/index.css';

// 创建 Vue 实例，并挂载到 #app 元素上
const app = createApp(App);

app.use(ElementPlus); // 使用 Element Plus

// 将 axios 挂载到全局，可以在任何组件中通过 this.$axios 访问
app.config.globalProperties.$axios = axios;

// 挂载应用到 id 为 'app' 的 DOM 元素上
app.mount('#app');
