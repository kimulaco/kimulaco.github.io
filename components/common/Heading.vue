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
  margin: 0 0 32px;
}
h3.Heading {
  font-size: 24px;
}
</style>
