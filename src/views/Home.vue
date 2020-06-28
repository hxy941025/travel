<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@c/Home/Header";
import HomeSwiper from "@c/Home/Swiper";
import HomeIcons from "@c/Home/Icons";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
};
</script>
