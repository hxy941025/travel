# travel

#### 项目搭建
- 初始化样式：reset.css
- 1px边框问题： border.css
- 300ms延迟问题： fastclick
- 加滚动：better-scroll
- 函数节流： 减少拖动、搜索时函数触发频率
- keep-alive： 路由加载后，缓存放入内存之中，下次再进路由不需要重新加载，使用keep-alive后新增生命周期函数activated
- 详情页 返回按钮及返回栏 切换，渐隐效果实现，增加节流函数减少其触发频率 

#### 踩坑点
- swiper组件name：引用vue-awesome-swiper后，不能存在任何组件name为swiper，否则报错
- 当采用flex居中时，ellipsis失效，尝试min-width、max-width均无效
- 当使用flex:1时，ellipsis失效，可以用min-width: 0,使其恢复
- 尝试使用provide+inject，但是mounted阶段ajax获取数据对于provide已经晚了，provide+inject在created之前，beforeCreate之后

#### 知识点
组件name用途
- 递归组件
- keep-alive时取消缓存
- vue-devtools里组件的name



#### 优化
- 由于采用exclude将detail排除keep-alive之外，因此detail里header组件下activated等生命周期钩子失效，改为mounted+destroyed来移除全局事件


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
