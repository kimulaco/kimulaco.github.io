<template>
  <div class="List">
    <ul class="List_link">
      <li v-for="item in items" :key="item" class="List_item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
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

.List {
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
