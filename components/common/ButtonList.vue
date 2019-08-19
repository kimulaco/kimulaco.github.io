<template>
  <ul class="LinkList">
    <li v-for="item in items" :key="item.name" class="LinkList_item">
      <a
        :href="item.url"
        class="LinkList_anchor"
        rel="noopener"
        target="_blank"
        @click="onClickLink(item.name)"
      >
        {{ item.name }}
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
  },
  methods: {
    onClickLink(itemName) {
      this.$ga.event({
        eventCategory: 'ButtonList',
        eventAction: 'click',
        eventLabel: itemName
      })
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
    color: $COLOR_CHARCOAL;
    min-width: 100px;
    padding: 8px;
    border: 2px solid $COLOR_CHARCOAL;
    border-radius: 2px;
    text-decoration: none;
    text-align: center;
    transition: 0.3s;
    @include active() {
      color: $COLOR_WHITE;
      background-color: $COLOR_CHARCOAL;
    }
  }
  &.-type-02 {
    a {
      color: $COLOR_WHITE;
      border-color: $COLOR_WHITE;
      @include active() {
        color: $COLOR_CHARCOAL;
        background-color: $COLOR_WHITE;
      }
    }
  }
}
</style>
