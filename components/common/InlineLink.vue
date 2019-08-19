<template>
  <a
    class="InlineLink"
    rel="noopener"
    target="_blank"
    :href="href"
    @click="onClickLink"
  >
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
  },
  methods: {
    onClickLink() {
      this.$ga.event({
        eventCategory: 'InlineLink',
        eventAction: 'click',
        eventLabel: this.$el.textContent
      })
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
