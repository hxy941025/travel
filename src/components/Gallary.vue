<template>
  <div class="container" @click="HandleClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in gallaryImgs" :key="index">
          <img class="gallery-img" :src="item" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  props: {
    gallaryImgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    HandleClick() {
      // 关闭
      this.$emit("close");
    },
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        // observer启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        // 默认false
        observeParents: true,
        observer: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.container /deep/ .swiper-container {
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  .wrapper {
    padding-bottom: 100%;
    height: 0;
    width: 100%;
    .gallery-img {
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
