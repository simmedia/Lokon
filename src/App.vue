<template>
  <div id="app">
    <div id="nav">
      <router-link to="/places">Places</router-link> |
      <router-link to="/">Change City</router-link>
    </div>

    <!-- 
    <ul>

      <li  v-for="(place, index) in places" :key="index">
        <h4 class="place_name">{{ place.fields.name }}</h4>
        <div>
          <img :src="place.fields.url" />
        </div>
        <p>
          {{ place.fields.description }}
        </p>
        <p>{{ place.fields.phone }}</p>
        <p>{{ place.fields.address }}</p>
      </li>
    </ul> -->
   <transition name="fade" mode="out-in">
    <router-view />
   </transition>
  </div>
</template>

<script>
// import GoogleMap from "./components/GoogleMap"

export default {
  name: "App",
  components: {},
  data() {
    return {
      places: [],
      value: 5
    };
  },
  created() {
    this.$contentful
      .getEntries()
      .then(res => {
        let newArr = res.items;
        this.$store.commit("fetchPlaces", newArr);
        this.places = newArr;
        // console.log(this.places);
      })
      .catch(error => {
        console.log(error);
      });
  },

  computed: {
    activeCity() {
      return this.$store.getters.activeCity;
    }
  },
  methods: {
    // changeCat(cat) {
    //   this.places = this.$store.getters.initPlaces;
    //   let newCat = this.places.filter(place => {
    //     return place.fields.category === cat;
    //   });
    //   this.places = newCat;
    //   console.log(this.places);
    // }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul {
  list-style: none;
  display: flex;
}
ul li {
  overflow: hidden;
  width: 30%;
  margin: 0 30px;
}
ul li p {
  width: 100%;
}
ul li img {
  height: 200px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
