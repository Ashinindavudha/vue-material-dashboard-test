import { abilitiesPlugin } from '@casl/vue'
import ability from './services/ability'
import DropDown from "./components/Dropdown.vue";
import LanguagesPlugin from './components/LanguagesPlugin'
import Datatable from '@laraveldaily/vue2-datatable'
import VueSweetalert2 from 'vue-sweetalert2'
import vSelect from 'vue-select'
import EventHub from './components/EventHubPlugin'
//import CKEditor from '@ckeditor/ckeditor5-vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.use(abilitiesPlugin, ability)
    Vue.component("drop-down", DropDown);
    Vue.use(LanguagesPlugin)
    Vue.use(Datatable)
    Vue.use(VueSweetalert2)
    Vue.use(CKEditor)
    Vue.use(EventHub)
    Vue.component('v-select', vSelect)
  }
};

export default GlobalComponents;
