<template>
  <ul class="LinkList">
    <li v-for="item in items" :key="item.text" class="LinkList_item">
      <a :href="item.href" class="LinkList_anchor" target="_blank">
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LinkList',
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

.LinkList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: -#{$margin-size} 0 0 -#{$margin-size};
  list-style: none;
  &_item {
    margin: $margin-size 0 0 $margin-size;
  }
  a {
    display: block;
    color: $COLOR_WHITE;
    min-width: 100px;
    padding: 8px;
    border: 2px solid $COLOR_WHITE;
    border-radius: 2px;
    text-decoration: none;
  }
}
</style>
