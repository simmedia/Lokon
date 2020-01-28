<template>
  <li class="place">
    {{ place.fields.name }}<br>
    <button @click="viewPlace()">View</button>
  </li>
</template>

<script>
// import PlaceDetails from '../views/PlaceDetails'
export default {
  // components: {PlaceDetails},
  props: {
    place: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewPlace() {
      var vm = this;
    //   console.log(vm.place.fields);

      this.$router.push({
        name: 'place',
        params: {
          place: vm.place.fields
        }
      });
    }
  }
};
</script>

<style></style>
