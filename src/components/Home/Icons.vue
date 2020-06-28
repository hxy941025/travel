<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide
        class="swiper-container"
        v-for="(page, index) of pages"
        :key="index"
      >
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-imgContent" :src="item.imgUrl" alt="" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props:{
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        autoplay: false
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixin.scss";
.icons {
  margin-top: 0.1rem;
  .swiper-container {
    //拿padding占位高度
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    .icon {
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      bottom: 0.44rem;
      .icon-img {
        @include center();
        .icon-imgContent {
          //宽度自动继承，高度需手动继承
          width: 70%;
        }
      }
      .icon-desc {
        //flex与ellipsis冲突，尝试修改min-width、max-width未果，放弃flex
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        @include ellipsis();
      }
    }
  }
}
</style>
