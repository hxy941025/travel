<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-list">
          <li
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapActions } from "vuex";
export default {
  name: "CityList",
  props: {
    cities: Object,
    hot: Array,
    letter: String,
  },
  watch: {
    letter() {
      if (this.letter) {
        // 遍历渲染列表时先为每个字母部分绑定ref，方便此处获取DOM元素
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
  computed: {
    ...mapState({
      currentCity: "city",
    }),
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    // 将mutations映射到methods 里
    ...mapActions(["changeCity"]),
  },
  mounted() {
    const options = {
      scrollY: true,
      scrollX: false,
      mouseWheel: true,
      click: true,
      taps: true,
    };
    this.scroll = new BScroll(this.$refs.wrapper, options);
  },
};
</script>

<style lang="scss" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.54rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
