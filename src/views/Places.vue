<template>
  <div>
    <button @click="changeCat('caffe')">caffe</button>
    <button @click="changeCat('hotel')">hotel</button>
    <transition name="fade" mode="out-in">
      <div>
        <ul>
          <Place v-for="(place, index) in places" :key="index" :place="place" />
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import Place from "@/components/Place";

export default {
  data() {
    return {
      places: []
    };
  },
  components: { Place },
  computed: {},
  methods: {
    changeCat(cat) {
      this.places = this.$store.getters.initPlaces.filter(place => {
        return place.fields.city === this.$store.getters.activeCity;
      });
      let newCat = this.places.filter(place => {
        return place.fields.category === cat;
      });
      this.places = newCat;
      console.log(this.places);
    }
  },
  beforeCreate() {
    this.places = this.$store.getters.initPlaces.filter(place => {
      return place.fields.city === this.$store.getters.activeCity;
    });
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
