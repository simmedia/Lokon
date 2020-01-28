<template>
  <div class="home">
    <form  @submit.prevent="setActiveCity">
      <select v-model="choosenCity" name="city" id="">
        <option value="Nis">Nis</option>
        <option value="Leskovac">Leskovac</option>
      </select>
      <input type="submit" value="Discover">
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      choosenCity: ''
    }
  },
  components: {
    
  },
  methods: {
    setActiveCity() {
      this.$store.commit('activeCity', this.choosenCity)
      this.$router.push('/places')
      console.log(this.$store.getters.activeCity);
      
    }
  }
};
</script>
