<template>
  <div class="HeaderContent">
    <h1 class="HeaderContent_title">kimulaco</h1>
    <p class="HeaderContent_desc">Web Front-end Developer.</p>
  </div>
</template>

<script>
export default {
  name: 'HeaderContent'
}
</script>

<style lang="scss" scoped>
.HeaderContent {
  padding: 16px 0 0;
  margin: 0 0 32px;
  &_title {
    font-size: 28px;
    margin: 0 0 32px;
  }
  &_desc {
    font-size: 16px;
  }
}
</style>
