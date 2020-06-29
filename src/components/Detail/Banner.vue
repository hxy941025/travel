<template>
  <div>
    <div class="banner" v-show="!showGallary" @click="handleImgClick">
      <img :src="bannerImg" class="banner-img" alt="" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe650;</span
          >{{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
  <fade>
    <gallary
            @close="handleClose"
            :gallaryImgs="gallaryImgs"
            v-show="showGallary"
    ></gallary>
  </fade>
  </div>
</template>

<script>
import Gallary from "@c/Gallary";
import Fade from "@c/Fade";
export default {
  name: "DetailBanner",
  components: {
    Gallary,
    Fade
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  data() {
    return {
      showGallary: false,
    };
  },
  methods: {
    handleImgClick() {
      this.showGallary = true;
    },
    handleClose() {
      this.showGallary = false;
    },
  },
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    color: white;
    line-height: 0.6rem;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      font-size: 0.32rem;
      padding: 0 0.2rem;
      flex: 1;
    }
    .banner-number {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      line-height: 0.32rem;
      height: 0.32rem;
      font-size: 0.24rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      .banner-icon {
        font-size: 0.24rem;
        padding: 0.02rem;
      }
    }
  }
}
</style>
