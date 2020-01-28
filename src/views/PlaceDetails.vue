<template>
  <div>
      {{place.name}} <br> <br>
      {{place.address}} <br>
      {{place.phone}} <br>
      {{place.category}} <br>
  </div>
</template>

<script>
export default {
        name: 'PlaceDetails',
        data() {
            return {
                place: null
            }
        },
      created() {
          this.place = this.$route.params.place
        
      }
    
}
</script>

<style>

</style>