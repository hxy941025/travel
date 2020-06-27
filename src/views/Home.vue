<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@c/Home/Header";
import HomeSwiper from "@c/Home/Swiper";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
  },
};
</script>
