<template>
  <div class="HeaderContent">
    <h1 class="HeaderContent_title">kimulaco</h1>
    <div class="HeaderContent_profile">
      <img class="HeaderContent_profile-icon" src="/img/profile.png" alt="" />
    </div>
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
  margin: 0 0 32px;
  &_title {
    font-size: 32px;
    margin: 0 0 24px;
  }
  &_desc {
    font-size: 16px;
  }
  &_profile {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    border-radius: 50%;
    overflow: hidden;
    &-icon {
      display: block;
      max-width: 100%;
    }
  }
}
</style>
