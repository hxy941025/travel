<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe623;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe650;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe695;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
//1rem = html font-size = 50px
@import "styles/varibles.scss";

.header {
  display: flex;
  line-height: 0.86rem;
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
    width: 1.24rem;
    float: right;
    text-align: center;

    .arrow-icon {
      font-size: 0.24rem;
    }
  }
}
</style>
