<template>
  <ul class="ProductList">
    <li v-for="item in items" :key="item.title" class="ProductList_item">
      <a
        :href="item.url"
        class="ProductList_anchor"
        rel="noopener"
        target="_blank"
        @click="onClickLink(item.title)"
      >
        <b>{{ item.title }}</b>
        <!-- eslint-disable vue/no-v-html -->
        <span v-html="item.desc" />
        <!-- eslint-enable vue/no-v-html -->
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
  },
  methods: {
    onClickLink(itemName) {
      this.$ga.event({
        eventCategory: 'ProductList',
        eventAction: 'click',
        eventLabel: itemName
      })
    }
  }
}
</script>

<style lang="scss">
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
    line-height: 1.4;
    text-decoration: none;
    text-align: left;
    transition: 0.3s ease;
    @include active() {
      color: $COLOR_WHITE;
      background-color: $COLOR_CHARCOAL;
      box-shadow: 0 2px 4px rgba($COLOR_CHARCOAL, 0.2);
      strong {
        color: #f57d68;
      }
    }
  }
  b {
    display: block;
    font-size: 18px;
    margin: 0 0 6px;
  }
  &.-type-02 {
    a {
      color: $COLOR_WHITE;
      border-color: $COLOR_WHITE;
    }
  }
}
</style>
