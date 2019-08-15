<template>
  <a class="InlineLink" target="_blank" :href="href">
    <span class="InlineLink_inner">
      <slot />
    </span>
  </a>
</template>

<script>
export default {
  name: 'InlineLink',
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.InlineLink {
  &_inner {
    display: inline-block;
    padding: 0 2px;
    border-bottom: 1px solid;
  }
}
</style>
