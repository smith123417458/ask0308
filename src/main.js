import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import CKEditor from 'ckeditor4-vue';
import '@/sass/app.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import $ from 'jquery';
import SortedTablePlugin from "vue-sorted-table";
Vue.use(SortedTablePlugin);
window.$ = $;
Vue.use( CKEditor );
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
