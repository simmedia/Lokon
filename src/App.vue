<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <google-map />
    <router-view />
  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap";

export default {
  name: "App",
  components: {
    GoogleMap
  },
  data() {
    return({
      places: [],
      created() {
        this.$contentful
  .getSpace()
  .then((res) => {
    console.log(res);
    
  })
  .catch((error) => {
    console.log(error);
    
});
      }
    })
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
</style>
