# 仿写去哪儿网Web

### 技术栈
- Vue全家桶 + axios + vue-awesome-swiper + better-scroll  
 
### 实现功能
- 首页：轮播图展示 + 自动分页轮播图 + 多区域列表展示
- 景点详情页：顶部栏渐隐切换 + 图片画廊展示组件 + 递归组件实现多级列表展示
- 城市选择页：城市列表与右侧城市名首字母表联动（可在右侧字母列表点击或滑动，实现左侧城市展示列表变化）+ 城市搜索 + 城市选择


### 主要技术点
#### Vue
- 组件间通信：父子、兄弟、Vuex
- keep-alive优化性能
- 递归组件实现多级列表展示
- vue-router：懒加载 + 页面跳转回归顶部
- vue动画

#### Css
- 初始化样式：reset.css、1px边框问题：border.css
- 图片占位：防止图片加载过程导致页面抖动，overflow: hidden + height:0 + padding-bottom: 图片宽高比占位
- scss + rem 实现自适应布局（rem为html font-size相对值）
- 纯css实现三角形（宽高为0，利用border + transparent）
- 文字溢出省略：overflow: hidden; white-space: nowrap; text-overflow: ellipsis;

#### 优化
- 解决300ms延迟问题：fastclick（利用touch事件先于click执行，在touch中屏蔽默认click后，模拟合成click事件）
- 移动端滚动优化：better-scroll（父overflow hidden，子超出父高度，transform: translate）
- 函数防抖：减少拖动、搜索时函数触发频率（clearTimeout + setTimeout）
- keep-alive：路由加载后缓存放入内存之中，下次再进路由不需要重新加载
- webpack-devServer代理请求到本地mock数据，将组件中数据抽离


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
