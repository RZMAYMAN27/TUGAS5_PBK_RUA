<script>
export default {
    methods: {
        goToAbout() {
            this.$router.push('/about')
        },
    },
}
</script>

<template>
    <div>
      <h1>Home Page</h1>
      <CarouselAndCard />
    </div>
  </template>
  
  <script setup>
  import CarouselAndCard from '../components/CarouselAndCard.vue'
  </script>