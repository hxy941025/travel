<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true,
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/f0e1f1fedae3e7da7eeda416d08c0911.jpg_750x200_19683e97.jpg",
        },
        {
          id: "002",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/61e0c45bd6f46af63f03fc19af63fd57.jpg_750x200_21f214c6.jpg",
        },
      ],
    };
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
  padding-bottom: 26.7%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
