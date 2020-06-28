# travel


#### 项目搭建
- 初始化样式：reset.css
- 1px边框问题： border.css
- 300ms延迟问题： fastclick


#### 踩坑点
- swiper组件name：引用vue-awesome-swiper后，不能存在任何组件name为swiper，否则报错
- 当采用flex布局居中时，ellipsis失效，尝试min-width、max-width均无效
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
