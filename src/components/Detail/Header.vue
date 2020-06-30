<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe623;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/">
        <div class="iconfont header-fixed-back">&#xe623;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      timer: null,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  methods: {
    handleScroll() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        //documentElement 属性以一个元素对象返回一个文档的文档元素
        const top = document.documentElement.scrollTop;
        if (top > 45) {
          let opacity = top / 120;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = { opacity };
          this.showAbs = false;
        } else {
          this.showAbs = true;
        }
      }, 16);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed(){
    window.removeEventListener("scroll", this.handleScroll);
  }
  // activated() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // // 全局事件及时解绑
  // deactivated() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
};
</script>

<style scoped lang="scss">
@import "styles/varibles.scss";

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.3rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  .header-abs-back {
    color: #fff;
    font-size: 0.3rem;
  }
}
.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
  .header-fixed-back {
    box-sizing: border-box;
    position: absolute;
    padding: 0 0.1rem;
    left: 0;
    width: 0.7rem;
    color: white;
    font-size: 0.4rem;
  }
}
</style>
