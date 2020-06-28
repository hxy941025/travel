<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@c/Home/Header";
import HomeSwiper from "@c/Home/Swiper";
import HomeIcons from "@c/Home/Icons";
import HomeRecommend from "@c/Home/Recommend";
import HomeWeekend from "@c/Home/Weekend";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
};
</script>
