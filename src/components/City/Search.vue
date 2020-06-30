<template>
  <div>
    <div class="search">
      <input
        type="text"
        class="search-input"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content" ref="search" v-show="hasData">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapActions } from "vuex";

export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  methods: {
    handleCityClick(city) {
      if (city === "未查找到相应城市") return;
      this.changeCity(city);
      this.$router.push("/");
    },
    // 将mutations映射到methods 里
    ...mapActions(["changeCity"]),
  },
  computed: {
    hasData() {
      return this.keyword;
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (!this.keyword) {
        this.list = [];
        return;
      }

      this.timer = setTimeout(() => {
        const result = [];
        for (let item in this.cities) {
          this.cities[item].forEach((val) => {
            if (
              val.spell.indexOf(this.keyword) > -1 ||
              val.name.indexOf(this.keyword) > -1
            ) {
              result.push(val);
            }
          });
        }

        if (result.length === 0) {
          result[0] = {
            id: 0,
            name: "未查找到相应城市",
          };
        }

        this.list = result;
      });
    },
  },
  mounted() {
    const options = {
      scrollY: true,
      scrollX: false,
      mouseWheel: true,
      click: true,
      taps: true,
    };
    this.scroll = new BScroll(this.$refs.search, options);
  },
};
</script>

<style lang="scss" scoped>
@import "styles/varibles.scss";

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  position: absolute;
  z-index: 1;
  top: 1.58rem;
  left: 0;
  bottom: 0;
  right: 0;
  background: #eee;
  overflow: hidden;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
  }
}
</style>
