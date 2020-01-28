import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeCity: '',
    places: []
  },
  mutations: {
    activeCity(state,payload) {
      state.activeCity = payload
    },
    fetchPlaces(state, payload) {
      state.places = payload
    }
  },
  actions: {
    
  },
  getters: {
    initPlaces(state) {
      return state.places
    },
    activeCity(state) {
      return state.activeCity
    },
    loadedPlace(state) {
      return (placeId) => {
        return state.places.find((place) => {
          return place.sys.id === placeId
        })
      }
    }
  },
  modules: {}
});
