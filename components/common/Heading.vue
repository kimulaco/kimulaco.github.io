<template>
  <h2 :is="tagName" class="Heading">
    <span class="Heading_inner">
      <slot />
    </span>
  </h2>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    level: {
      type: [String, Number],
      default: '2'
    }
  },
  computed: {
    tagName() {
      return `h${this.level}`
    }
  }
}
</script>

<style lang="scss" scoped>
.Heading {
  text-align: center;
  font-size: 28px;
  margin: 32px 0 28px;
  &_inner {
    display: inline-block;
    padding: 0 10px 2px;
    position: relative;
    &:after {
      content: '';
      display: block;
      background: $COLOR_CHARCOAL;
      height: 4px;
      width: 100%;
      position: absolute;
      bottom: -2px;
      left: 0;
      transform: skewX(45deg);
    }
  }
  + .Heading {
    margin-top: 16px;
  }
}
h3.Heading {
  font-size: 24px;
  margin: 32px 0 16px;
  .Heading_inner {
    &:after {
      display: none;
    }
  }
}
</style>
