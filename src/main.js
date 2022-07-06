import axios from 'axios';
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

axios.defaults.baseURL='https://dummyjson.com' 

createApp(App).use(router).mount('#app');
