<template>
  <div class="LinkList">
    <ul class="LinkList_list">
      <li v-for="item in items" :key="item.name" class="LinkList_item">
        <a
          :href="item.url"
          class="LinkList_anchor"
          rel="noopener"
          target="_blank"
          @click="onClickLink(item.name)"
        >
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
  },
  methods: {
    onClickLink(itemName) {
      this.$ga.event({
        eventCategory: 'LinkList',
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
  margin: 0 auto;
  &_list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    margin: -#{$margin-size} 0 0 -#{$margin-size};
    list-style: none;
  }
  &_item {
    flex: 0 1 135px;
    width: 135px;
    max-width: 135px;
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
