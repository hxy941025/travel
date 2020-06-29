<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  //此处name不能命名为swiper，否则报错maximum call stack size exceed
  name: "HomeSwiper",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true,
      },
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: white;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  //padding-bottom % 计算是根据父元素的width的值进行计算的
  padding-bottom: 31.5%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
