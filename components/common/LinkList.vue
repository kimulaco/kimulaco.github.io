<template>
  <div class="LinkList">
    <ul class="LinkList_list">
      <li v-for="item in items" :key="item.name" class="LinkList_item">
        <a :href="item.url" class="LinkList_anchor" target="_blank">
          <span>
            {{ item.name }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LinkList',
  props: {
    items: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$margin-size: 16px;

.LinkList {
  max-width: 360px;
  margin: 0 auto;
  &_list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: -#{$margin-size} 0 0 -#{$margin-size};
    list-style: none;
  }
  &_item {
    flex: 0 1 calc(50% - #{$margin-size});
    width: calc(50% - #{$margin-size});
    max-width: calc(50% - #{$margin-size});
    margin: $margin-size 0 0 $margin-size;
  }
  a {
    display: block;
    color: $COLOR_CHARCOAL;
    padding: 8px;
    text-align: center;
    text-decoration: none;
    span {
      display: inline-block;
      padding: 0 5px;
      border-bottom: 1px solid;
    }
  }
}
</style>
