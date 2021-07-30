<template>
  <div class="app">
    <h3>4364y4334</h3>
    <carousel>
      <carousel-slide v-for="(slide,index) in slides" :key="slide" :index="index">
        <h3>h22h</h3>
        <img :src="slide">
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from './components/Carousel';
import CarouselSlide from './components/CarouselSlide';
export default {
  data() {
    return {
      slides: [
        'https://picsum.photos/id/237/600/350',
        'https://picsum.photos/id/234/600/350',
        'https://picsum.photos/id/232/600/350',
        'https://picsum.photos/id/231/600/350',
        'https://picsum.photos/id/238/600/350',
      ],
      visibleSlide : 0,
    }
  },
  components: {
      Carousel,
      CarouselSlide
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

carousel {
  height: 500px;
}
</style>
