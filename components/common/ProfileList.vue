<template>
  <div class="ProfileList">
    <ul class="ProfileList_link">
      <li v-for="item in items" :key="item" class="ProfileList_item">
        {{ item }}
      </li>
    </ul>
  </div>
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
  max-width: 540px;
  margin: 0 auto;
  &_link {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: -#{$margin-top-size} 0 0 -#{$margin-left-size};
    list-style: none;
  }
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
