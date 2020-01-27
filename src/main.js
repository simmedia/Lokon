import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";
import ContentfulVue from 'contentful-vue';
import StarRating from 'vue-dynamic-star-rating'

Vue.component('star-rating', StarRating);
 
Vue.use(ContentfulVue, {
  space: 'lcijgogsylev',
  accessToken: 'r_lahMyybkqiPU8fjwJu-nyWC9S2sTLvxhTZzLrb2Qg'
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCVZsVGRufHHthBzfsL4WGDzuCCzCgm26E",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
