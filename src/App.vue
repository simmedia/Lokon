<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <VueStars :value="3"/>
    </div>
    <ul>
      <li v-for="(place, index) in places" :key="index">
        <!-- <h4>{{ place.name }}</h4> -->
        <div>
          <!-- <img :src="place.picture" alt=""> -->
        </div>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import VueStars from "./components/Rating"

export default {
  name: "App",
  components: {VueStars},
  data() {
    return {
      places: [],
      config: {
        rating: 3.2,
        style: {
          fullStarColor: "#ed8a19",
          emptyStarColor: "#737373",
          starWidth: 10,
          starHeight: 10
        }
      },
      created: this.$contentful
        .getEntries()
        .then(res => {
          this.places.push(res.items[0].fields);

          console.log(res.items[0].fields.name);
        })
        .catch(error => {
          console.log(error);
        })
    };
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
