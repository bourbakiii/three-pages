import {createApp} from 'vue'
// import 'reset-css';
// import '@/assets/scss/global.scss';
import router from '@/router/router.js';
import App from '@/app.vue'


console.log("its called");


createApp(App).use(router).mount('#__portfolio_app')
