<template>
  <div id="app">
    <!--    除了detail外，其他页面都会被缓存-->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="less"></style>
