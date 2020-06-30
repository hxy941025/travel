<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe623;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe650;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="arrow-icon"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
// mapState 将state映射出来
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["city"]),
  },
};
</script>

<style lang="scss" scoped>
//1rem = html font-size = 50px
@import "styles/varibles.scss";

.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    color: #ccc;
    margin-top: 0.12rem;
    padding-left: 0.2rem;
    background: white;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
  }

  .header-right {
    min-width: 1.24rem;
    padding: 0 0.1rem;
    float: right;
    text-align: center;
    color: white;
    .arrow-icon {
      display: inline-block;
      width: 0;
      height: 0;
      border-left: 0.15rem solid transparent;
      border-right: 0.15rem solid transparent;
      border-top: 0.24rem solid white;
    }
  }
}
</style>
