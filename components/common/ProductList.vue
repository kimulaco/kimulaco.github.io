<template>
  <ul class="ProductList">
    <li v-for="item in items" :key="item.name" class="ProductList_item">
      <a :href="item.url" class="ProductList_anchor" target="_blank">
        <b>{{ item.name }}</b>
        {{ item.desc }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProductList',
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
$margin-size: 16px;

.ProductList {
  padding: 0;
  list-style: none;
  max-width: 540px;
  margin: 0 auto;
  &_item {
    margin: 0 0 24px;
  }
  a {
    display: block;
    color: $COLOR_CHARCOAL;
    min-width: 100px;
    padding: 10px;
    border: 2px solid $COLOR_CHARCOAL;
    border-radius: 2px;
    text-decoration: none;
    text-align: left;
  }
  b {
    display: block;
    font-size: 18px;
    margin: 0 0 8px;
  }
  &.-type-02 {
    a {
      color: $COLOR_WHITE;
      border-color: $COLOR_WHITE;
    }
  }
}
</style>
