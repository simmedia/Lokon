<template>
  <div id="app">
    <div v-if="activeCity" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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

    <router-view />
  </div>
</template>

<script>
// import GoogleMap from "./components/GoogleMap"

export default {
  name: "App",
  components: {},
  data() {
    return {
      value: 5
    };
  },
  created() {
     this.$contentful
      .getEntries()
      .then(res => {
        let newArr = res.items
        this.$store.commit('fetchPlaces', newArr)
      })
      .catch(error => {
        console.log(error);
      });
  },

  computed: {
    places() {
      return this.$store.getters.initPlaces
    },
    activeCity() {
      return this.$store.getters.activeCity
    }
  },
  methods: {
    
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
</style>
