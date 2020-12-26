import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import vuetify from './plugins/vuetify';
import $ from 'jquery'; 
// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";
// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import GlobalMixins from './mixins/global'
import Notifications from "./components/NotificationPlugin";
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
import { mapActions } from 'vuex'
Vue.use(GlobalMixins)
Vue.use(Notifications);
//Vue.use(mapGetters);
Vue.config.productionTip = false
Vue.prototype.$jquery = $
window._ = require('lodash')
window.objectToFormData = require('object-to-formdata').objectToFormData
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.baseURL = 'http://localhost:8000/api/v1/'

new Vue({
  router,
  store,
  i18n,
  created() {
    this.fetchLanguages()
  },
  methods: {
    ...mapActions('I18NStore', ['fetchLanguages'])
  },
  vuetify,
  render: h => h(App)
}).$mount('#app')
