# travel


#### 项目搭建
- 初始化样式：reset.css
- 1px边框问题： border.css
- 300ms延迟问题： fastclick
- 加滚动：better-scroll
- 函数节流： 减少拖动、搜索时函数触发频率
- keep-alive： 路由加载后，缓存放入内存之中，下次再进路由不需要重新加载，使用keep-alive后新增生命周期函数activated

#### 踩坑点
- swiper组件name：引用vue-awesome-swiper后，不能存在任何组件name为swiper，否则报错
- 当采用flex居中时，ellipsis失效，尝试min-width、max-width均无效
- 当使用flex: 1时，ellipsis失效，可以用min-width: 0,使其恢复


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
