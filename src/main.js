import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
Vue.use(Avue);//导入Avue插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
import VueParticles from 'vue-particles'//导入动画效果登录
Vue.use(VueParticles)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
