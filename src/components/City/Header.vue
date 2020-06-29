<template>
  <div class="header">
    城市选择
    <router-link to="/" class="header-left">
      <div class="iconfont back-icon">&#xe623;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
};
</script>

<style lang="scss" scoped>
@import "styles/varibles.scss";

.header {
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
  position: relative;
  .header-left {
    box-sizing: border-box;
    position: absolute;
    padding: 0 0.1rem;
    left: 0;
    width: 0.64rem;
    color: white;
    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }
}
</style>
