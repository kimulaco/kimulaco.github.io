<template>
  <ul class="ProfileList">
    <li v-for="item in items" :key="item" class="ProfileList_item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProfileList',
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$margin-top-size: 10px;
$margin-left-size: 20px;

.ProfileList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: -#{$margin-top-size} 0 0 -#{$margin-left-size};
  list-style: none;
  &_item {
    margin: $margin-top-size 0 0 $margin-left-size;
    &.-nest {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
